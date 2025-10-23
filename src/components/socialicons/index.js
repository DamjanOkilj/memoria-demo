import React from "react";
import "./style.css";
import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
      </ul>
      <ul>
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )
        }
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
