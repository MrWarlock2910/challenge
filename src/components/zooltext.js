import React from 'react';

const ZoolText = () => {
  return (
    <div className="zooltext-container">
      <div className="zooltext-header">
        <h1>ZooTools AI-powered insights<p>Making analytics simple and actionable</p></h1>
        
        <div className="ask-question">
          <button className="question-button">Ask Question</button>
          <span className="tooltip">What questions do you have in mind?</span>
        </div>
      </div>
      <div className="zooltext-content">
        <div className="zooltext-box">
          <div className="upper-half">
            <div className="box-header">
              <div className="icon red-icon"></div>
              <div className="half-box">
                <h2>Signups are slowing down.-5% new than last week</h2>
              
              </div>
            </div>
          </div>
          <div className="lower-half">
            <div className="box-text">
              <div className="half-box">
                <p>Tip: Promote more your product online, and make sure to drive as much traffic as possible to the signup form. Here is an <a href="https://blog.hubspot.com/service/customer-acquisition" target="_blank" rel="noopener noreferrer">article on user acquisition</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="zooltext-box">
          <div className="upper-half">
            <div className="box-header">
              <div className="icon green-icon"></div>
              <h2>Form completion rate is good (20% conversion rate)</h2>
            </div>
          </div>
          <div className="lower-half">
            <div className="box-text">
              <p>Tip: You could increase conversion rates by asking fewer questions, making sure you are bringing qualified leads to your forms</p>
            </div>
          </div>
        </div>
      </div>
      <div className="zooltext-content">
        <div className="zooltext-box">
          <div className="upper-half">
            <div className="box-header">
              <div className="icon green-icon"></div>
              <h2>80% of your signups are referrals, congrats!</h2>
            </div>
          </div>
          <div className="lower-half">
            <div className="box-text">
              <p>You are doing an outstanding job to motivate your users to invite their friends. Make sure to keep engaging with them with email marketing campaigns. Here is an <a href="https://digitalagencynetwork.com/the-untapped-power-of-email-signatures-in-digital-marketing/" target="_blank" rel="noopener noreferrer">article on email marketing campaigns</a></p>
            </div>
          </div>
        </div>
        <div className="zooltext-box">
          <div className="upper-half">
            <div className="box-header">
              <div className="icon yellow-icon"></div>
              <h2>Growth tips for you to try next</h2>
            </div>
          </div>
          <div className="lower-half">
            <div className="box-text">
              <p>Have you considered creating email flows to remind your subscribers to invite their friends and celebrate referrals milestones? Read this <a href="https://fjolt.com/article/javascript-building-an-email-subscription-service" target="_blank" rel="noopener noreferrer">guide on how to do it</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoolText;
