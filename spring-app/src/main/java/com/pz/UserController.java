package com.pz;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
//@CrossOrigin(origins = { "*" })
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {

	@GetMapping("/list")
	public List<User> getUsersList() {
		// Create a list of users (replace this with your data source)
		List<User> userList = new ArrayList<>();
		userList.add(new User(1L, "user1", "user1@example.com"));
		userList.add(new User(2L, "user2", "user2@example.com"));
		userList.add(new User(3L, "user3", "user3@example.com"));
//		Gson gson = new Gson();
//		String userListJson = gson.toJson(userList);
		return userList;
	}
}
