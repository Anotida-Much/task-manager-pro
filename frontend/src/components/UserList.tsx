import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User as UserIcon } from "lucide-react";
import { User } from "@/types";

interface UserListProps {
  users: User[];
  onUserSelect: (user: User) => void;
  selectedUser: User | null;
}

const USERS_PER_PAGE = 5;

export function UserList({ users, onUserSelect, selectedUser }: UserListProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const startIdx = (page - 1) * USERS_PER_PAGE;
  const currentUsers = users.slice(startIdx, startIdx + USERS_PER_PAGE);

  if (users.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        <UserIcon className="mx-auto h-12 w-12 mb-4 opacity-50" />
        <p>No users found. Create your first user above.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {currentUsers.map((user) => (
        <Card
          key={user.id}
          className={`p-4 cursor-pointer transition-all ${
            selectedUser?.id === user.id
              ? "border-primary ring-2 ring-primary"
              : ""
          }`}
          onClick={() => onUserSelect(user)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <UserIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{user.name}</h3>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <Button
              variant={selectedUser?.id === user.id ? "default" : "outline"}
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onUserSelect(user);
              }}
            >
              {selectedUser?.id === user.id ? "Selected" : "Select"}
            </Button>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            Created: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : ""}
          </div>
        </Card>
      ))}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          <button
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="px-2 py-1">{page} / {totalPages}</span>
          <button
            className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default UserList;