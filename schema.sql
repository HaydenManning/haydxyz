-- This file will hold the schema for our database layout --

CREATE TABLE user (
    uniq_user_id serial primary key,
    auth_id varchar(50) NOT NULL,
    f_name varchar(40),
    l_name varchar(40),
    -- MOVE TO CHAT TABLE display_name varchar(40),
    email varchar(60),
    orig_ip varchar(100),
    creation_date varchar(40),
    last_login varchar(40),
    last_login_location varchar(80),
    profile_avatar text,
    user_role varchar(15),
    phone_number varchar(20),
    street_address varchar(60),
    city varchar(50),
    state varchar(15),
    country varchar(40),
    zip_code varchar(15),
    orig_location varchar(80),
    website varchar(80),
    biography text
);

CREATE TABLE url (
    uniq_id serial primary key,
    short_url varchar(8),
    orig_url text,
    author int REFERENCES user(uniq_user_id)
);