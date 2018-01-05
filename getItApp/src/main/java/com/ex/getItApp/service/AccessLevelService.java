package com.ex.getItApp.service;

import com.ex.getItApp.model.AccessLevel;

public interface AccessLevelService {
	
	public void addAccessLevel(AccessLevel userAccess);
	public AccessLevel findAccessLevelByUserId(Integer id);
	public AccessLevel findAccessLevelById(Integer id);

}
