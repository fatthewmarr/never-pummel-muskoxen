package com.ex.getItApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="USER_ACCESS")
public class AccessLevel {

	@Id
	@Column(name="USERACCESS_ID")
	@SequenceGenerator(allocationSize=1, name="userAccessSeq", sequenceName="USERACCESS_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator ="userAccessSeq")
	private Integer id;
	
	@JoinColumn(name="USER_ID")
	@ManyToOne(fetch=FetchType.EAGER, targetEntity=User.class)
	private Integer userid;
	
	@JoinColumn(name="STUDYSET_ID")
	@ManyToOne(fetch=FetchType.EAGER, targetEntity=StudySet.class)
	private Integer studyset_id;
	
	@Column(name="ACCESSLEVEL")
	private Integer accessLevel;
	
	public AccessLevel() {};

	public AccessLevel(Integer user_id, Integer studyset_id, Integer accessLevel) {
		super();
		this.userid = user_id;
		this.studyset_id = studyset_id;
		this.accessLevel = accessLevel;
	}

	public AccessLevel(Integer id, Integer user_id, Integer studyset_id, Integer accessLevel) {
		super();
		this.id = id;
		this.userid = user_id;
		this.studyset_id = studyset_id;
		this.accessLevel = accessLevel;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUser_id() {
		return userid;
	}

	public void setUser_id(Integer user_id) {
		this.userid = user_id;
	}

	public Integer getStudyset_id() {
		return studyset_id;
	}

	public void setStudyset_id(Integer studyset_id) {
		this.studyset_id = studyset_id;
	}

	public Integer getAccessLevel() {
		return accessLevel;
	}

	public void setAccessLevel(Integer accessLevel) {
		this.accessLevel = accessLevel;
	}

	@Override
	public String toString() {
		return "AccessLevel [id=" + id + ", user_id=" + userid + ", studyset_id=" + studyset_id + ", accessLevel="
				+ accessLevel + "]";
	}
	
	
	
	
	
}
