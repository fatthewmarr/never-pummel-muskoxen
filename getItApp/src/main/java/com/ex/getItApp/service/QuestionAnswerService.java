package com.ex.getItApp.service;

import java.util.ArrayList;
import java.util.List;

import com.ex.getItApp.model.QuestionAnswer;
import com.ex.getItApp.model.StudySet;

public interface QuestionAnswerService {
	
	public void addQuestionAnswer(QuestionAnswer set);
	public QuestionAnswer findQuestionAnswerById(Integer id);
	public ArrayList<QuestionAnswer> findQuestionAnswersByStudySet(StudySet studyset);
	public List<QuestionAnswer> findAllQuestionAnswers();

}
