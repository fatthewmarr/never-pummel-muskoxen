package com.ex.getItApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ex.getItApp.model.StudySet;
import com.ex.getItApp.model.User;


@Repository
public interface StudySetRepository extends JpaRepository<StudySet, Integer> {

	public StudySet findStudySetById(Integer Id);
	public List<StudySet> findStudySetsByauthor(User author);
	
}
