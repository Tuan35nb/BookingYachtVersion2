package com.example.YachtBookingBackEnd.service.implement;


import com.example.YachtBookingBackEnd.dto.*;
import com.example.YachtBookingBackEnd.entity.Company;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;


public interface ICustomer {
    String addCustomer(String idAccount, String fullName, String email, String phoneNumber, String address);

    List<CustomerDTO> getAllCustomer();

    CustomerDTO getCustomer(String  id);

    boolean updateCustomer(String customerId, String fullName, String email, String phone, String address);

    CustomerDTO findCustomerByUsername(String username);

    boolean addFeedback(int starRating, String description, String idBooking, String idCustomer, String idYacht, LocalDate date  );

    List<FeedbackDTO> getFeedbackByYachtId(String yachtId);

    List<CompanyDTO> getAllCompanies();

    List<String> findIdBookingByCustomerId(String customerId);

    boolean isFeedbackAllowed(String idBooking);
}
