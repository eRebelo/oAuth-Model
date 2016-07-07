package com.ciandt.domain;

/**
 * Created by rebelo on 14/01/2016.
 */

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class Login {
    @Id
    private String userId;

    private String mainEmail, displayName;

    public Login() {
    }

    public Login(String userId, String mainEmail, String displayName) {
        this.userId = userId;
        this.mainEmail = mainEmail;
        this.displayName = displayName;
    }

    public void setMainEmail(String mainEmail) {

        this.mainEmail = mainEmail;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getMainEmail() {

        return mainEmail;
    }

    public String getDisplayName() {
        return displayName;
    }

    public String getUserId() {
        return userId;
    }


}
