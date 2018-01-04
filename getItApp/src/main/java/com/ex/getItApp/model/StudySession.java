package com.ex.getItApp.model;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonFormat;

@Component
@Entity
@Table(name="STUDY_SESSIONS")
public class StudySession {

	//private static final SimpleDateFormat sdf = new SimpleDateFormat("MM.dd.HH.mm");
	
	@Id
	@Column(name="SESSION_ID")
	@SequenceGenerator(allocationSize=1, name="sessionSeq", sequenceName="SESSION_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="sessionSeq")
	private Integer id;
	
	@JoinColumn(name="AUTHOR_ID")
	@ManyToOne(fetch=FetchType.EAGER, targetEntity=User.class)
	private User author;
	
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name="SESSION_ATTENDANTS",
	joinColumns=@JoinColumn(name="SESSION_ID"),
	inverseJoinColumns=@JoinColumn(name="U_ID"))
	private List<User> user; //REVIEW AND CONFIRM
	
	@Column(name="STUDYSESSION_NAME")
	private String name;
	
	@Column(name="STUDYSESSION_LOCATION")
	private String location;
	
	@Column(name="STUDYSESSION_TIME", nullable = false)
	@JsonFormat(pattern="yyyy-MM-dd HH:mm") 
	private Timestamp submitted;
	
	@Column(name="STUDYSESSION_DESCRIPTION")
	private String description;

	public StudySession() {};
	
	public StudySession(User author_id, List<User> user, String name, String location, Timestamp submitted,
			String description) {
		super();
		this.author = author_id;
		this.user = user;
		this.name = name;
		this.location = location;
		this.submitted = submitted;
		this.description = description;
	}

	public StudySession(Integer id, User author_id, List<User> user, String name, String location,
			Timestamp submitted, String description) {
		super();
		this.id = id;
		this.author = author_id;
		this.user = user;
		this.name = name;
		this.location = location;
		this.submitted = submitted;
		this.description = description;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public User getAuthor() {
		return author;
	}
	public void setAuthor(User author) {
		this.author = author;
	}
	public List<User> getUser() {
		return user;
	}
	public void setUser(List<User> user) {
		this.user = user;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Timestamp getSubmitted() {
		return submitted;
	}
	public void setSubmitted(Timestamp submitted) {
		this.submitted = submitted;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "StudySession [id=" + id + ", author_id=" + author + ", user=" + user + ", name=" + name
				+ ", location=" + location + ", submitted=" + submitted + ", description=" + description + "]";
	}

	
}
