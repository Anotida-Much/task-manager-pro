import React, { useState, useEffect } from "react";
import { UserList } from "@/components/UserList";
import { TaskList } from "@/components/TaskList";
import { UserForm } from "@/components/UserForm";
import { TaskForm } from "@/components/TaskForm";
import { WeatherWidget } from "@/components/WeatherWidget";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { User, Task } from "@/types";
import { UserPlus } from "lucide-react";
import {
  getUsers,
  createUser,
  getTasksForUser,
  createTaskForUser,
} from "@/api/api";

function Index() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  // Fetch users on mount
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  // Fetch tasks when selectedUser changes
  useEffect(() => {
    if (selectedUser) {
      getTasksForUser(selectedUser.id).then(setTasks);
    } else {
      setTasks([]);
    }
  }, [selectedUser]);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    toast.success(`Selected user: ${user.name}`);
  };

  const handleUserCreate = async (userData: Omit<User, "id" | "createdAt">) => {
    const newUser = await createUser(userData);
    setUsers((prev) => [...prev, newUser]);
    setIsUserModalOpen(false);
    toast.success("User created successfully");
  };

  const handleTaskCreate = async (
    taskData: Omit<Task, "id" | "createdAt" | "userId">
  ) => {
    if (!selectedUser) return;
    const newTask = await createTaskForUser(selectedUser.id, {
      title: taskData.title,
      description: taskData.description,
    });
    setTasks((prev) => [...prev, newTask]);
    toast.success("Task created successfully");
  };

  const handleTaskToggle = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    // Optionally, update the task on the backend here
  };

  const getUserTasks = (userId: number) => {
    return tasks.filter((task) => task.userId === userId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            User Management
          </h1>
          <p className="text-muted-foreground text-lg">
            Manage users and their tasks efficiently
          </p>
        </div>

        {/* Weather Widget - Right Aligned */}
        <div className="mb-6 flex justify-end">
          <WeatherWidget />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Users */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">
                  Users ({users.length})
                </h2>
                <Dialog
                  open={isUserModalOpen}
                  onOpenChange={setIsUserModalOpen}
                >
                  <DialogTrigger asChild>
                    <Button>
                      <UserPlus className="w-4 h-4 mr-2" />
                      Add User
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Add New User</DialogTitle>
                    </DialogHeader>
                    <UserForm onSubmit={handleUserCreate} />
                  </DialogContent>
                </Dialog>
              </div>
              <UserList
                users={users}
                onUserSelect={handleUserSelect}
                selectedUser={selectedUser}
              />
            </Card>
          </div>

          {/* Right Column - Tasks */}
          <div className="space-y-6">
            {selectedUser && (
              <>
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    Add Task for{" "}
                    {<span className="text-blue-500">{selectedUser.name}</span>}
                  </h2>
                  <TaskForm
                    userId={selectedUser.id}
                    onSubmit={handleTaskCreate}
                  />
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    {selectedUser.name}'s Tasks (
                    {getUserTasks(selectedUser.id).length})
                  </h2>
                  <TaskList
                    tasks={getUserTasks(selectedUser.id)}
                    onTaskToggle={handleTaskToggle}
                  />
                </Card>
              </>
            )}

            {!selectedUser && (
              <Card className="p-6 text-center">
                <div className="text-muted-foreground">
                  <h3 className="text-xl font-medium mb-2">Select a User</h3>
                  <p>
                    Choose a user from the left panel to view and manage their
                    tasks.
                  </p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <Separator className="mb-4" />
          <p>
            Built with React, TypeScript, Tailwindcss and modern web
            technologies
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;