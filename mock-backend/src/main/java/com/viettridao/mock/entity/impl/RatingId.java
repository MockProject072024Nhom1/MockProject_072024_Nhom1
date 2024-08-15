package com.viettridao.mock.entity.impl;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class RatingId implements Serializable {

    private Integer customerId;
    private Integer contractId;
    
}
