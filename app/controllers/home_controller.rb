class HomeController < ApplicationController
  def index

  end

  def terms
  end

  def privacy
  end

  def thank_you
    @name = params[:name]
    @email = params[:email]
    @message = params[:message]
    ActionMailer::Base.mail(from: @email,

        to: 'justintaj@yahoo.com.com',

        to: 'justintaj@yahoo.com',

        subject: "A new contact form message from #{@name}",
        body: @message).deliver_now
  end

end
