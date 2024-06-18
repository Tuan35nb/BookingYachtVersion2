package com.example.YachtBookingBackEnd.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class YachtImageDTO {
    private String idYachtImage;
    private String imageYacht;
}
