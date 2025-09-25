import React, { Component } from 'react';
import './App.css';
import Pricing from './Pricing';
import Payment from './Payment';
import PaymentSuccess from './PaymentSuccess';
import MoviesPage from './MoviesPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showAbout: false, 
      showSignIn: false, 
      showSignUp: false, 
      showPricing: false, 
      showPayment: false, 
      showPaymentSuccess: false, 
      showMovies: false,
      selectedPlan: null 
    };

    // Bind event handlers to this
    this.handleSelectPlan = this.handleSelectPlan.bind(this);
    this.handlePaymentSuccess = this.handlePaymentSuccess.bind(this);
    this.handleContinueToSignIn = this.handleContinueToSignIn.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSelectPlan(plan) {
    this.setState({ showPricing: false, showPayment: true, selectedPlan: plan });
  }

  handlePaymentSuccess() {
    this.setState({ showPayment: false, showPaymentSuccess: true });
  }

  handleContinueToSignIn() {
    this.setState({ showPaymentSuccess: false, showSignIn: true });
  }

  handleSignIn() {
    this.setState({ showSignIn: false, showMovies: true });
  }

  render() {
    return (
      <div className="app">
        {/* Background Video */}
        <video autoPlay muted loop className="background-video">
          <source src="/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Header */}
        <div className="header">
          <label className="logo">Cineva</label>
          <div className="header-controls">
            <label className="nav-item" onClick={() => this.setState({ showAbout: true })}>About</label>
            <input type="text" placeholder="Search" className="search" />
            <button className="signin-btn" onClick={() => this.setState({ showSignIn: true })}>SignIn</button>
          </div>
        </div>

        {/* Main Content */}
        {!this.state.showPricing && !this.state.showPayment && !this.state.showPaymentSuccess && !this.state.showMovies && !this.state.showSignIn && (
          <div className="main-content">
            <div className="headline">
              <label className="escape">Escape</label>
              <label className="into">Into <label className="stories">Stories</label></label>
              <label className="description">
                Discover an endless world of movies, series, and shows, each thoughtfully tailored to match your every mood, moment, and desire.
              </label>
              <button className="get-started" onClick={() => this.setState({ showSignUp: true })}>Get Started</button>
            </div>
          </div>
        )}

        {/* About Popup */}
        {this.state.showAbout && (
          <div className="popup">
            <label className="popup-title">About Cineva</label>
            <label className="popup-text">Welcome to Cineva — a streaming experience designed around your choice, your pace, and your lifestyle.</label>
            <label className="popup-text">At Cineva, we offer affordable subscriptions or a Pay-Per-Hour model — perfect for casual watchers.</label>
            <label className="popup-text">Whether binge-watching or occasional viewing, Cineva ensures entertainment your way.</label>
            <label className="popup-text">Dive into a world tailored to your mood — and pay only for what you enjoy.</label>
            <label className="popup-text">Cineva — Your story. Your time. Your way.</label>
            <button className="close-btn" onClick={() => this.setState({ showAbout: false })}>Close</button>
          </div>
        )}

        {/* SignIn Popup */}
        {this.state.showSignIn && (
          <div className="signin-overlay">
            <div className="signin-container">
              {/* Left */}
              <div className="signin-left">
                <label className="logo">Cineva</label>
                <div className="explore-text">
                  <label className="explore-title">Explore</label>
                  <label className="explore-title">New Worlds</label>
                  <label className="explore-subtitle">Where Every Story Finds a Place in Your Heart.</label>
                  <label className="explore-description">
                    Dive into unforgettable movies, series, and moments — all on your terms.
                  </label>
                </div>
              </div>

              {/* Right */}
              <div className="signin-right">
                <div className="signin-form-container">
                  <label className="welcome-title">Welcome Back!!!</label>
                  <div className="input-group">
                    <label>Email/Phone number</label>
                    <input type="text" className="input-field" />
                  </div>
                  <div className="input-group">
                    <label>Password</label>
                    <input type="password" className="input-field" />
                  </div>
                  <div className="forgot-password">
                    <label>Forgot Password?</label>
                  </div>
                  <button className="signin-button" onClick={this.handleSignIn}>SIGN IN</button>
                  <div className="separator">
                    <div className="line"></div>
                    <label>or</label>
                    <div className="line"></div>
                  </div>
                  <div className="signup-text">
                    <label onClick={() => this.setState({ showSignIn: false, showSignUp: true })}>
                      Are you new? Signup
                    </label>
                  </div>
                  <button className="close-btn" onClick={() => this.setState({ showSignIn: false })}>Close</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SignUp Popup */}
        {this.state.showSignUp && (
          <div className="signup-overlay">
            <div className="signup-container">
              {/* Left - Promotional Content */}
              <div className="signup-left">
                <label className="signup-promo-title">WE ARE STREAMING SMARTER.</label>
                <label className="signup-promo-text">
                  Welcome to Cineva — a place where your mood meets your perfect match in movies and series.
                </label>
                <label className="signup-promo-text">
                  From endless binge nights to quick cinematic escapes, we offer flexible plans tailored for every dreamy.
                </label>
                <label className="signup-promo-text">
                  Your screen, your choice, your journey.
                </label>
              </div>

              {/* Right - Sign Up Form */}
              <div className="signup-right">
                <div className="signup-form-container">
                  <label className="signup-title">SIGN UP</label>
                  <div className="input-group">
                    <label>Email/Phone number</label>
                    <input type="text" className="input-field" />
                  </div>
                  <div className="input-group">
                    <label>Set Password</label>
                    <input type="password" className="input-field" />
                  </div>
                  <button className="signup-button">SIGN UP</button>
                  <div className="signup-footer">
                    <label className="step-text">STEP-1</label>
                    <button
                      className="next-btn"
                      onClick={() => this.setState({ showSignUp: false, showPricing: true })}
                    >
                      NEXT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pricing Page */}
        {this.state.showPricing && (
          <Pricing onBack={() => this.setState({ showPricing: false })} onSelectPlan={this.handleSelectPlan} />
        )}

        {/* Payment Page */}
        {this.state.showPayment && (
          <Payment 
            selectedPlan={this.state.selectedPlan} 
            onBack={() => this.setState({ showPayment: false, showPricing: true })} 
            onPaymentSuccess={this.handlePaymentSuccess}
          />
        )}

        {/* Payment Success Page */}
        {this.state.showPaymentSuccess && (
          <PaymentSuccess onContinue={this.handleContinueToSignIn} />
        )}

        {/* Movies Page */}
        {this.state.showMovies && (
          <MoviesPage />
        )}

        {/* Footer */}
        {!this.state.showPricing && !this.state.showPayment && !this.state.showPaymentSuccess && !this.state.showMovies && !this.state.showSignIn && (
          <div className="footer">
            <label>Helpline: +1 (800) 123-4567</label>
            <label>© 2025 Cineva. All rights reserved.</label>
          </div>
        )}
      </div>
    );
  }
}

export default App;