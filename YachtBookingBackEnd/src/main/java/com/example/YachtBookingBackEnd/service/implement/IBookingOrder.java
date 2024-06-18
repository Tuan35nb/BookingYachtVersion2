package com.example.YachtBookingBackEnd.service.implement;

import com.example.YachtBookingBackEnd.dto.BookingOrderDTO;

import java.util.List;

public interface IBookingOrder {
    List<BookingOrderDTO> getAllBookingsByCompanyId(String idCompany);

    boolean confirmBooking(String idBookingOrder);

    boolean cancelBooking(String idBookingOrder);
}
