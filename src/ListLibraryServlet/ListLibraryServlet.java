package ListLibraryServlet;

import java.io.IOException;
import java.io.PrintWriter;

public class ListLibraryServlet extends javax.servlet.http.HttpServlet {
    
    protected void doPost(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
            System.out.print("gggggggggggg");
        PrintWriter out = response.getWriter();
        response.setContentType("text/html;charset=utf-8");
        out.print("<a href=\"http://www.w3school.com.cn\">W3School</a>");
    }

    protected void doGet(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }
}
