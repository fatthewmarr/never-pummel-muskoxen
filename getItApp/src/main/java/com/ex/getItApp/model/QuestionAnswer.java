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
@Table(name="Question_Answers")
public class QuestionAnswer {

	@Id
	@Column(name="QA_ID")
	@SequenceGenerator(allocationSize=1, name="qaSeq", sequenceName="QUESTIONANSWERS_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator ="qaSeq")
	private Integer id;
	
	@JoinColumn(name="STUDYSET", nullable=false)
	@ManyToOne(fetch=FetchType.EAGER)
	private StudySet studyset;
	
	@Column(name="QUESTION")
	private String question;
	
	@Column(name="ANSWER")
	private String answer;
	
	public QuestionAnswer() {};

	public QuestionAnswer(StudySet studyset, String question, String answer) {
		super();
		this.studyset = studyset;
		this.question = question;
		this.answer = answer;
	}

	public QuestionAnswer(Integer id, StudySet studyset, String question, String answer) {
		super();
		this.id = id;
		this.studyset = studyset;
		this.question = question;
		this.answer = answer;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public StudySet getStudyset() {
		return studyset;
	}

	public void setStudyset(StudySet studyset) {
		this.studyset = studyset;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	@Override
	public String toString() {
		return "QuestionAnswer [id=" + id + ", studyset=" + studyset + ", question=" + question + ", answer=" + answer
				+ "]";
	}
	
	
}
