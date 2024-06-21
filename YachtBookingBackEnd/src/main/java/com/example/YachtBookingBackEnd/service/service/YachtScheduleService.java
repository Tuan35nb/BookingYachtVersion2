package com.example.YachtBookingBackEnd.service.service;

import com.example.YachtBookingBackEnd.entity.Schedule;
import com.example.YachtBookingBackEnd.entity.Yacht;
import com.example.YachtBookingBackEnd.entity.YachtSchedule;
import com.example.YachtBookingBackEnd.entity.key.KeysYachtSchedule;
import com.example.YachtBookingBackEnd.repository.ScheduleRepository;
import com.example.YachtBookingBackEnd.repository.YachtRepository;
import com.example.YachtBookingBackEnd.repository.YachtScheduleRepository;
import com.example.YachtBookingBackEnd.service.implement.IYachtSchedule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.Optional;

@Service
public class YachtScheduleService implements IYachtSchedule {
    @Autowired
    private YachtScheduleRepository yachtScheduleRepository;
    @Autowired
    private ScheduleRepository scheduleRepository;
    @Autowired
    private YachtRepository yachtRepository;

    @Override
    public boolean addYachtSchedule(String yachtId, LocalDateTime startDate,  LocalDateTime endDate) {
        try{
            Optional<Yacht> yacht = yachtRepository.findById(yachtId);
            if(yacht.isPresent()) {
                Optional<Schedule> schedule = scheduleRepository.findByStartDateAndEndDate(startDate, endDate);
                if(schedule.isPresent()) {
                    return false;
                }else{
                    Schedule newSchedule = new Schedule();
                    newSchedule.setStartDate(startDate);
                    newSchedule.setEndDate(endDate);
                    scheduleRepository.save(newSchedule);

                    YachtSchedule yachtSchedule = new YachtSchedule();
                    yachtSchedule.setSchedule(newSchedule);
                    yachtSchedule.setYacht(yacht.get());

                    KeysYachtSchedule key = new KeysYachtSchedule(yachtId, newSchedule.getIdSchedule());
                    yachtSchedule.setKeys(key);

                    yachtScheduleRepository.save(yachtSchedule);
                    return true;
                }
            }
        }catch (Exception e){
            System.out.println("error add yacht schedule "+e.getMessage());
        }
        return false;
    }

    @Override
    public boolean deleteYachtSchedule(String yachtId, String scheduleId) {
        try{
            KeysYachtSchedule keysYachtSchedule = new KeysYachtSchedule(yachtId, scheduleId);
            Optional<YachtSchedule> yachtSchedule = yachtScheduleRepository.findByKeys(keysYachtSchedule);
            if(yachtSchedule.isPresent()){
                yachtScheduleRepository.delete(yachtSchedule.get());
                return true;
            }
        }catch (Exception e){
            System.out.println("Error delete yacht schedule: "+e.getMessage());
        }
        return false;
    }

    @Override
    public boolean updateYachtSchedule(String yachtId, String scheduleId, LocalDateTime newStartDate, LocalDateTime newEndDate) {
        try{
            KeysYachtSchedule key = new KeysYachtSchedule(yachtId, scheduleId);
            Optional<YachtSchedule> yachtSchedule = yachtScheduleRepository.findByKeys(key);
            if (yachtSchedule.isPresent()) {
                Schedule schedule = yachtSchedule.get().getSchedule();

                // Check if there's an existing schedule with the new dates (but ignore the current schedule)
                Optional<Schedule> existingSchedule = scheduleRepository.findByStartDateAndEndDate(newStartDate, newEndDate);
                if (existingSchedule.isPresent() && !existingSchedule.get().getIdSchedule().equals(scheduleId)) {
                    return false;
                }

                schedule.setStartDate(newStartDate);
                schedule.setEndDate(newEndDate);
                scheduleRepository.save(schedule);
                return true;
            } else {
                return false;
            }
        }catch (Exception e){
            System.out.println("Error update yacht schedule: "+e.getMessage());
        }
        return false;
    }
}