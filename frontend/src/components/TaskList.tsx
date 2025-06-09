import { Task } from '@/types';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Circle, Plus } from 'lucide-react';

interface TaskListProps {
  tasks: Task[];
  onTaskToggle: (taskId: number) => void;
}

export function TaskList({ tasks, onTaskToggle }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        <Plus className="mx-auto h-12 w-12 mb-4 opacity-50" />
        <p>No tasks found. Create your first task above.</p>
      </div>
    );
  }

  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div className="space-y-4">
      {/* Pending Tasks */}
      {pendingTasks.length > 0 && (
        <div>
          <h4 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wide">
            Pending ({pendingTasks.length})
          </h4>
          <div className="space-y-2">
            {pendingTasks.map((task) => (
              <TaskItem key={task.id} task={task} onToggle={onTaskToggle} />
            ))}
          </div>
        </div>
      )}

      {/* Completed Tasks */}
      {completedTasks.length > 0 && (
        <div>
          <h4 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wide">
            Completed ({completedTasks.length})
          </h4>
          <div className="space-y-2">
            {completedTasks.map((task) => (
              <TaskItem key={task.id} task={task} onToggle={onTaskToggle} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: number) => void;
}

function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <Card className={`p-4 transition-all duration-200 hover:shadow-sm ${
      task.completed ? 'bg-green-50 border-green-200' : 'hover:bg-accent'
    }`}>
      <div className="flex items-start space-x-3">
        <Button
          variant="ghost"
          size="sm"
          className="p-0 h-auto"
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <Circle className="w-5 h-5 text-muted-foreground hover:text-primary" />
          )}
        </Button>
        <div className="flex-1 min-w-0">
          <h4 className={`font-medium ${task.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
            {task.title}
          </h4>
          <p className={`text-sm mt-1 ${task.completed ? 'line-through text-muted-foreground' : 'text-muted-foreground'}`}>
            {task.description}
          </p>
          <div className="mt-2 text-xs text-muted-foreground">
            Created: {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : ""}
          </div>
        </div>
      </div>
    </Card>
  );
}
