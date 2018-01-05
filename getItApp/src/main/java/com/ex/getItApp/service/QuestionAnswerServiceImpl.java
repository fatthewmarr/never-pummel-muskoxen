package com.ex.getItApp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.getItApp.model.QuestionAnswer;
import com.ex.getItApp.model.StudySet;
import com.ex.getItApp.repository.QuestionAnswerRepository;

@Service
@Transactional
public class QuestionAnswerServiceImpl implements QuestionAnswerService{

	@Autowired
	private QuestionAnswerRepository questionanswerRepo;
	
	@Override
	public void addQuestionAnswer(QuestionAnswer set) {
		questionanswerRepo.save(set);
	}

	@Override
	public QuestionAnswer findQuestionAnswerById(Integer id) {
		return questionanswerRepo.findQuestionAnswerById(id);
	}

	@Override
	public ArrayList<QuestionAnswer> findQuestionAnswersByStudySet(StudySet studyset) {
		return questionanswerRepo.findQuestionAnswerBystudyset(studyset);
	}

	@Override
	public List<QuestionAnswer> findAllQuestionAnswers() {
		return questionanswerRepo.findAll();
	}	

}
