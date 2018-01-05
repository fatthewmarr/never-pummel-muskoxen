package com.ex.getItApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="TEST_USERS")
public class User {
	
	@Id
	@Column(name="USER_ID")
	@SequenceGenerator(allocationSize=1,name="userSeq",sequenceName="USER_SEQ")
	@GeneratedValue(generator="userSeq",strategy=GenerationType.SEQUENCE)
	private Integer id;
	
	@Column(name="USER_FIRSTNAME")
	private String firstname;
	
	@Column(name="USER_LASTNAME")
	private String lastname;
	
	@Column(name="USER_EMAIL", unique=true, nullable=false)
	private String email;
	
	@Column(name="USER_PASSWORD", nullable=false)
	private String password;
	
	public User() {}
	
	public User(Integer id, String firstname, String lastname, String email, String password) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
	}



	public User(String firstname, String lastname, String email, String password) {
		super();
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", firstname=" + firstname + ", lastname="
				+ lastname + ", email=" + email + ", password=" + password
				+ "]";
	};

	
	
}