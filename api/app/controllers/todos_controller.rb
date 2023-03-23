class TodosController < ApplicationController
    before_action :session_expired?
    rescue_from StandardError, with: :standard_error

    def create
        todo = user.todos.create(todo_params)
        if todo.valid?
            app_response(status: :created, data: todo)
        else
            app_response(status: :unprocessable_entity, data: todo.errors, message: "failed to create"
        end
    end

    private
    def invalid_priority
        app_response(message: "failed", data: {info: err.message}, status: :unprocessable_entity)
    end

    def todo_params
        params.permit(:title, :description, :status, :priority)
    end
end
