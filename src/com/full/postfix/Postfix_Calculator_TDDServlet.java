package com.full.postfix;

import java.io.IOException;
import java.util.Date;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.full.pojo.Employee;

@SuppressWarnings("serial")
public class Postfix_Calculator_TDDServlet extends HttpServlet {
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		resp.setContentType("text/plain");
		String employeeString = serializeEmployee();
		resp.getWriter().println("Hello, world. Here's the employee: " + employeeString);
	}

	private String serializeEmployee() {
		Employee employee = new Employee(1, "Lokesh", "Gupta", new Date(1981, 8, 18));
		ObjectMapper mapper = new ObjectMapper();
		String employeeString = "";
		try {
			//mapper.defaultPrettyPrintingWriter().writeValue(new File("c://temp/employee.json"), employee);
			employeeString = mapper.writeValueAsString(employee);
		} catch (JsonGenerationException e) {
			e.printStackTrace();
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return employeeString;
	}
}
