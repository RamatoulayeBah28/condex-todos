"use client";

import React from 'react';
import { SignInButton, UserButton } from "@clerk/nextjs";
import { NewToDoForm } from "./_components/new-todo-form";
import { ToDoList } from "./_components/to-do-list";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { GenerateTodosForm } from "./_components/generate-todos-form";
import { Card, CardHeader, CardContent, Button } from '@mui/material';
import { Loader2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 py-8">
      <Card className="max-w-screen-md mx-auto shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          Your Personal To-Do List
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <Authenticated>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Welcome back!</h2>
              <UserButton afterSignOutUrl="/" />
            </div>
            <ToDoList />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Add New Task</h3>
                  <NewToDoForm />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Generate Tasks with AI 🪄</h3>
                  <GenerateTodosForm />
                </CardContent>
              </Card>
            </div>
          </Authenticated>
          <Unauthenticated>
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Organized with Your Personal To-Do List</h2>
              <p className="text-gray-600 mb-6">Sign in to start managing your tasks efficiently.</p>
              <SignInButton>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-full hover:from-blue-600 hover:to-purple-600 transition duration-300">
                  Sign In to Get Started
                </Button>
              </SignInButton>
            </div>
          </Unauthenticated>
          <AuthLoading>
            <div className="flex justify-center items-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
              <p className="ml-2 text-gray-600">Loading your personal space...</p>
            </div>
          </AuthLoading>
        </CardContent>
      </Card>
    </div>
  );
}