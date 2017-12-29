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
@Table(name="STUDYSETS")
public class StudySet {

	@Id
	@Column(name="STUDYSET_ID")
	@SequenceGenerator(allocationSize=1, name="StudySetSeq", sequenceName="STUDYSET_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="StudySetSeq")
	private Integer id;
	
	@JoinColumn(name="AUTHOR_ID", nullable=false)
	@ManyToOne(fetch=FetchType.EAGER) //targetEntity=User.class)
	private User author;
	
	@Column(name="STUDYSET_NAME")
	private String name;
	
	public StudySet() {}

	public StudySet(User author, String name) {
		super();
		this.author = author;
		this.name = name;
	}

	public StudySet(Integer id, User author, String name) {
		super();
		this.id = id;
		this.author = author;
		this.name = name;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "StudySet [id=" + id + ", author_id=" + author.getId() + ", name=" + name + "]";
	};
	
	
	
}
