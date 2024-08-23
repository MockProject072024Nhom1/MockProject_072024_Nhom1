package com.team1.mockproject.service;

import com.team1.mockproject.model.Customer;
import com.team1.mockproject.model.User;
import com.team1.mockproject.repository.CustomerRepository;
import com.team1.mockproject.repository.UserRepository;
import com.team1.mockproject.request.CustomerRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private UserRepository userRepository; // Assuming you have a UserRepository

    @Override
    public Customer createCustomer(CustomerRequest customerRequest) {
        User user = userRepository.findById(customerRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found")); // Handle this exception as needed

        Customer customer = new Customer();
        customer.setUser(user);
        customer.setRegistrationDate(customerRequest.getRegistrationDate());
        customer.setBio(customerRequest.getBio());

        return customerRepository.save(customer);
    }

    @Override
    public Optional<Customer> getCustomerById(Long customerId) {
        return customerRepository.findById(customerId);
    }

    @Override
    public Customer updateCustomer(Long customerId, CustomerRequest customerRequest) {
        Customer existingCustomer = customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Customer not found")); // Handle this exception as needed

        User user = userRepository.findById(customerRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found")); // Handle this exception as needed

        existingCustomer.setUser(user);
        existingCustomer.setRegistrationDate(customerRequest.getRegistrationDate());
        existingCustomer.setBio(customerRequest.getBio());

        return customerRepository.save(existingCustomer);
    }

    @Override
    public void deleteCustomer(Long customerId) {
        customerRepository.deleteById(customerId);
    }
}
