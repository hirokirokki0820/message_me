class SessionsController < ApplicationController


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

end
