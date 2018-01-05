package com.ex.getItApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ex.getItApp.model.AccessLevel;
import com.ex.getItApp.repository.AccessLevelRepository;

@Service
@Transactional
public class AccessLevelServiceImpl implements AccessLevelService {

	@Autowired
	private AccessLevelRepository accesslevelRepo;
	
	@Override
	public void addAccessLevel(AccessLevel userAccess) {
		accesslevelRepo.save(userAccess);
		
	}

	@Override
	public AccessLevel findAccessLevelByUserId(Integer id) {
		return accesslevelRepo.findAccessLevelByuserid(id);
	}

	@Override
	public AccessLevel findAccessLevelById(Integer id) {
		return accesslevelRepo.findAccessLevelById(id);
	}

}
