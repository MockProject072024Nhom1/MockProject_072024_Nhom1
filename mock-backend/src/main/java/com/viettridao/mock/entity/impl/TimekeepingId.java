package com.viettridao.mock.entity.impl;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class TimekeepingId implements Serializable {

    private Integer bodyguardId;
    private Integer contractId;
    
}
