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
<<<<<<< HEAD
        to: 'justintaj@yahoo.com.com',
=======
        to: 'justintaj@yahoo.com',
>>>>>>> 3151a5a61987bd94a5b8595f84886733ca3bd835
        subject: "A new contact form message from #{@name}",
        body: @message).deliver_now
  end

end
