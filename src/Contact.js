import React from "react";
import "./Contact.css";

export default function Contact(props) {
  return (
    <>
      <body2>
        <div
          class="all"
          style={{ color: props.mode === "#042743" ? "white" : "black" }}
        >
          <div class="allone">
            <div class="left-side">
              <div class="address details">
                <i class="fas fa-map-marker-alt"></i>
                <div class="topic">Address</div>
                <div class="text-one">Jaitpur, Badarpur</div>
                <div class="text-two">South East Delhi - 110044</div>
              </div>
              <div class="phone details">
                <i class="fas fa-phone-alt"></i>
                <div class="topic">Phone</div>
                <div class="text-one">93540-29281</div>
                <div class="text-two">85950-82171</div>
              </div>
              <div class="email details">
                <i class="fas fa-envelope"></i>
                <div class="topic">Email</div>
                <div class="text-one">vkvivekverma22@gmail.com</div>
                <div class="text-two">sksonuverma22@gmail.com</div>
              </div>
            </div>
            <div class="right-side">
              <div class="topic-text">Send me a message</div>
              <p>
                If you have any work from me or any types of quries related to
                my work , you can send me message from here. It's my pleasure to
                help you.
              </p>
              <form action="#">
                <div class="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div class="input-box message-box">
                  <textarea
                    name=""
                    id=""
                    placeholder="Enter your text here......."
                  ></textarea>
                </div>
                <div class="button">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </body2>
    </>
  );
}
