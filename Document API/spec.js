var spec =
{
    swagger: "2.0", 
    info: {
        description:
            "",
        version: "1.0",
        title: "Mock Project"
    },
    host: "localhost:3000", 
    basePath: "/api/", 
    tags: [   
        {
            name: "admin",                               
            description: "Các API về tài khoản quản trị",   
        }
    ],
    schemes: ["http"],  
    paths: {
        "/admin/user": {
            get: {
                tags: ["admin"],
                summary: "Get all users",
                description: "",
                operationId: "getAllUser",
                consumes: ["application/json"],
                produces: ["application/json"],
                responses: {
                    200: {                                     // Mã trả về 200
                        description: "Get user successful",    // Mô tả kết quả trả về
                        schema: {
                            type: "array",  
                            item: {
                                $ref: "#/definitions/user" 
                            }
                                      
                        }
                    },
                },
                security: [
                    {
                        BearerAuth: []
                    }
                ]
            },
            post: {
                tags: ["admin"],
                summary: "Add new user",
                description: "Add new user",
                operationId: "addNewUser",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "body",
                        name: "body",
                        required: true,
                        schema: {
                            type: "object",
                            properties: {
                                firstName: {
                                    type: "string",
                                    description: "First name of the user"
                                },
                                lastName: {
                                    type: "string",
                                    description: "Last name of the user"
                                },
                                email: {
                                    type: "string",
                                    description: "Email of the user",
                                    format: "email",
                                    pattern: ".+@.+"
                                },
                                password: {
                                    type: "string",
                                    description: "Password of the user",
                                    minLength: 8,
                                    maxLength: 12
                                },
                                avatar: {
                                    type: "string",
                                    description: "Avatar URL of the user",
                                    nullable: true
                                },
                                address: {
                                    type: "string",
                                    description: "Address of the user",
                                    nullable: true
                                },
                                phoneNumber: {
                                    type: "string",
                                    description: "Phone number of the user",
                                    pattern: "^\d{10}$",
                                    example: "0123456789"
                                },
                                gender: {
                                    type: "string",
                                    description: "Gender of the user",
                                    enum: ["M", "F", "O"],
                                    default: "M"
                                },
                                dob: {
                                    type: "string",
                                    description: "Date of birth of the user",
                                    format: "date-time",
                                    example: "01/01/1999"
                                },
                                status: {
                                    type: "string",
                                    description: "Status of the user",
                                    enum: ["Active", "Inactive"],
                                    default: "Active"
                                },
                                roleId: {
                                    type: "integer",
                                    description: "Role ID of the user"
                                },
                                cityId: {
                                    type: "integer",
                                    description: "City ID of the user"
                                },
                                registrationDate: {
                                    type: "string",
                                    description: "Date and time when the user registered",
                                    format: "date-time",
                                }
                            },
                            required: ["firstName", "lastName", "email", "password", "phoneNumber", "dob", "roleId", "cityId"]
                        }
                    }
                ],
                responses: {
                    201: {
                        description: "User created successfully"
                    },
                    400: {
                        description: "Invalid input"
                    }
                },
                security: [{
                    BearerAuth: []
                }]
            },
            put: {
                tags: ["admin"],
                summary: "Update user information",
                description: "Update user information",
                operationId: "updateUser",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "query",
                        name: "userId",
                        required: true,
                        type: "integer",
                        description: "ID of the user to be updated"
                    },
                    {
                        in: "body",
                        name: "body",
                        required: true,
                        schema: {
                            type: "object",
                            properties: {
                                firstName: {
                                    type: "string",
                                    description: "First name of the user"
                                },
                                lastName: {
                                    type: "string",
                                    description: "Last name of the user"
                                },
                                email: {
                                    type: "string",
                                    description: "Email of the user",
                                    format: "email",
                                    pattern: ".+@.+"
                                },
                                password: {
                                    type: "string",
                                    description: "Password of the user",
                                    minLength: 8,
                                    maxLength: 12
                                },
                                avatar: {
                                    type: "string",
                                    description: "Avatar URL of the user",
                                    nullable: true
                                },
                                address: {
                                    type: "string",
                                    description: "Address of the user",
                                    nullable: true
                                },
                                phoneNumber: {
                                    type: "string",
                                    description: "Phone number of the user",
                                    pattern: "^\d{10}$",
                                    example: "0123456789"
                                },
                                gender: {
                                    type: "string",
                                    description: "Gender of the user",
                                    enum: ["M", "F", "O"],
                                    default: "M"
                                },
                                dob: {
                                    type: "string",
                                    description: "Date of birth of the user",
                                    format: "date-time"
                                },
                                status: {
                                    type: "string",
                                    description: "Status of the user",
                                    enum: ["Active", "Inactive"],
                                    default: "Active"
                                },
                                roleId: {
                                    type: "integer",
                                    description: "Role ID of the user"
                                },
                                cityId: {
                                    type: "integer",
                                    description: "City ID of the user"
                                }
                            },
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "User updated successfully"
                    },
                    400: {
                        description: "Invalid input"
                    }
                },
                security: [
                    {
                        BearerAuth: []
                    }
                ]
            },
            delete: {
                tags: ["admin"],
                summary: "Delete User",
                description: "Change status of user is inactive",
                operationId: "deactivateUser",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "query",
                        name: "userId",
                        required: true,
                        type: "integer",
                        description: "ID of the user to be deactivated"
                    }
                ],
                responses: {
                    200: {
                        description: "User deactivated successfully"
                    },
                    400: {
                        description: "Invalid input"
                    }
                },
                security: [
                    {
                        BearerAuth: []
                    }
                ]
            }
        },
        "/admin/customer": {
            post: {
                tags: ["admin"],
                summary: "Add new customer",
                description: "Thêm khách hàng mới",
                operationId: "addNewCustomer",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "body",
                        name: "body",
                        required: true,
                        schema: {
                            type: "object",
                            properties: {
                                fullName: {
                                    type: "string",
                                    description: "Name of the customer"
                                },
                                email: {
                                    type: "string",
                                    description: "Email of the customer",
                                    format: "email"
                                },
                                phoneNumber: {
                                    type: "string",
                                    description: "Phone number of the customer",
                                    pattern: "^\d{10}$",
                                    example: "0123456789"
                                },
                                address: {
                                    type: "string",
                                    description: "Address of the customer",
                                    nullable: true
                                },
                                gender: {
                                    type: "string",
                                    description: "Gender of the customer",
                                    enum: ["M", "F", "O"],
                                    default: "M"
                                },
                                serviceName: {
                                    type: "string",
                                    description: "Name of the service associated with the customer"
                                },
                                contractDate: {
                                    type: "string",
                                    description: "Date when the contract was created",
                                    format: "date-time"
                                },
                                contractStatus: {
                                    type: "string",
                                    description: "Status of the contract",
                                    enum: ["Active", "Inactive", "Pending"]
                                },
                                bio: {
                                    type: "string",
                                    description: "Bio of the customer",
                                    nullable: true
                                }
                            },
                            required: ["fullName", "email", "phoneNumber"]
                        }
                    }
                ],
                responses: {
                    201: {
                        description: "Customer created successfully"
                    },
                    400: {
                        description: "Invalid input"
                    }
                },
                security: [
                    {
                        BearerAuth: []
                    }
                ]
            },
            put: {
                tags: ["admin"],
                summary: "Update customer information",
                description: "Sửa thông tin khách hàng",
                operationId: "updateCustomer",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "query",
                        name: "customerId",
                        required: true,
                        type: "integer",
                        description: "ID of the customer to be updated"
                    },
                    {
                        in: "body",
                        name: "body",
                        required: false,
                        schema: {
                            type: "object",
                            properties: {
                                fullName: {
                                    type: "string",
                                    description: "Name of the customer"
                                },
                                email: {
                                    type: "string",
                                    description: "Email of the customer",
                                    format: "email"
                                },
                                phoneNumber: {
                                    type: "string",
                                    description: "Phone number of the customer",
                                    pattern: "^\d{10}$",
                                    example: "0123456789"
                                },
                                address: {
                                    type: "string",
                                    description: "Address of the customer",
                                    nullable: true
                                },
                                gender: {
                                    type: "string",
                                    description: "Gender of the customer",
                                    enum: ["M", "F", "O"],
                                    default: "M"
                                },
                                serviceName: {
                                    type: "string",
                                    description: "Name of the service associated with the customer"
                                },
                                contractDate: {
                                    type: "string",
                                    description: "Date when the contract was created",
                                    format: "date-time"
                                },
                                contractStatus: {
                                    type: "string",
                                    description: "Status of the contract",
                                    enum: ["Active", "Inactive", "Pending"]
                                },
                                bio: {
                                    type: "string",
                                    description: "Bio of the customer",
                                    nullable: true
                                }
                            }
                        }
                    }
                ],
                responses: {
                    200: {
                        description: "Customer updated successfully"
                    },
                    400: {
                        description: "Invalid input"
                    }
                },
                security: [
                    {
                        BearerAuth: []
                    }
                ]
            },
            delete: {
                tags: ["admin"],
                summary: "Delete customer",
                description: "Change status of customer is\] inactive",
                operationId: "deleteCustomer",
                consumes: ["application/json"],
                produces: ["application/json"],
                parameters: [
                    {
                        in: "query",
                        name: "customerId",
                        required: true,
                        type: "integer",
                        description: "ID of the customer to be deleted"
                    }
                ],
                responses: {
                    200: {
                        description: "Customer deleted successfully"
                    },
                    400: {
                        description: "Invalid input"
                    }
                },
                security: [
                    {
                        BearerAuth: []
                    }
                ]
            }
        }
    },
    securityDefinitions: {  
        BearerAuth: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            description: "Enter 'Bearer' [space] and then your token in the text input below. Example: 'Bearer abcdef12345'"
        }
    },
    definitions: {           
        user: {                 
            type: "object",         
            properties: {          
                id: {                  
                    type: "integer",
                    description: "ID of the user"
                },
                email: {
                    type: "string",
                    description: "Email of the user",
                    format: "email"
                },
                password: {
                    type: "string",
                    description: "Password of the user"
                },
                role: {
                    type: "string",
                    description: "Role of the user",
                    enum: ["ROLE_CUSTOMER", "ROLE_ADMIN", "ROLE_RESTAURANT_OWNER"]
                },
                registrationDate: {
                    type: "string",
                    description: "Registration date of the user",
                    format: "date-time"
                },
                status: {
                    type: "string",
                    description: "Status of the user",
                    enum: ["Active", "Inactive"]
                }
            }
        },
        customer: {
            type: "object",
            properties: {
                customerId: {
                    type: "integer",
                    description: "ID of the customer"
                },
                fullName: {
                    type: "string",
                    description: "Name of the customer"
                },
                email: {
                    type: "string",
                    description: "Email of the customer",
                    format: "email"
                },
                phoneNumber: {
                    type: "string",
                    description: "Phone number of the customer",
                    pattern: "^\d{10}$",
                    example: "0123456789"
                },
                address: {
                    type: "string",
                    description: "Address of the customer",
                    nullable: true
                },
                gender: {
                    type: "string",
                    description: "Gender of the customer",
                    enum: ["M", "F", "O"],
                    default: "M"
                },
                serviceName: {
                    type: "string",
                    description: "Name of the service associated with the customer"
                },
                contractDate: {
                    type: "string",
                    description: "Date when the contract was created",
                    format: "date-time"
                },
                contractStatus: {
                    type: "string",
                    description: "Status of the contract",
                    enum: ["Active", "Inactive", "Pending"]
                },
                bio: {
                    type: "string",
                    description: "Bio of the customer",
                    nullable: true
                }
            }
        }
    }
    
};
