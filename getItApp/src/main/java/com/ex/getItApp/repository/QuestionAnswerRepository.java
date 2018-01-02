package com.ex.getItApp.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.getItApp.model.QuestionAnswer;
import com.ex.getItApp.model.StudySet;

@Repository
public interface QuestionAnswerRepository extends JpaRepository<QuestionAnswer, Integer>{
	
	public QuestionAnswer findQuestionAnswerById(Integer id);
	public ArrayList<QuestionAnswer> findQuestionAnswerBystudyset(StudySet studyset);

	
}
