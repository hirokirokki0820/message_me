class SessionsController < ApplicationController
  before_action :logged_in_redirect, only: [:new, :create]

  def new
  end

  def create
    user = User.find_by(username: params[:session][:username].downcase)
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:success] = "ログインに成功しました。"
      redirect_to root_path
    else
      flash.now[:error] = "ユーザー名、またはパスワードに間違いがあります。"
      render "new", status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:info] = "ログアウトしました。"
    redirect_to login_path, status: :see_other
  end

  private

  def logged_in_redirect
    if logged_in?
      flash[:error] = "すでにログインしています。"
      redirect_to root_path
    end
  end

end
