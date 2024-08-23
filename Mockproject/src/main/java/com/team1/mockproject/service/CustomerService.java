package com.team1.mockproject.service;

import com.team1.mockproject.model.Customer;
import com.team1.mockproject.request.CustomerRequest;

import java.util.Optional;

public interface CustomerService {

    Customer createCustomer(CustomerRequest customerRequest);

    Optional<Customer> getCustomerById(Long customerId);

    Customer updateCustomer(Long customerId, CustomerRequest customerRequest);

    void deleteCustomer(Long customerId);
}
