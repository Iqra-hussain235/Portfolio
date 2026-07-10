'use client';

import { useState, useEffect, FormEvent} from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Plus, LogOut, BarChart3, MessageSquare, FolderOpen } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [projects, setProjects] = useState<any[]>([]);

  const [contacts, setContacts] = useState<any[]>([]);
  const [stats, setStats] = useState({ projectCount: 0, contactCount: 0 });
  const [editingProject, setEditingProject] = useState<any>(null);
  const [isProjectDialogOpen, setIsProjectDialogOpen] = useState(false);
  

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    const savedToken = localStorage.getItem('adminToken');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
      fetchData(savedToken);
    }
  }, []);

  const fetchData = async (authToken:string) => {

    try {
      const [projectsRes, contactsRes, statsRes] = await Promise.all([
        fetch(`${API_URL}/projects`),
        fetch(`${API_URL}/admin/contacts`, {
          headers: { Authorization: `Bearer ${authToken}` },
        }),
        fetch(`${API_URL}/admin/stats`, {
          headers: { Authorization: `Bearer ${authToken}` },
        }),
      ]);

      const projectsData = await projectsRes.json();
      const contactsData = await contactsRes.json();
      const statsData = await statsRes.json();

      setProjects(projectsData);
      setContacts(contactsData);
      setStats(statsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogin = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('adminToken', data.token);
        setToken(data.token);
        setIsAuthenticated(true);
        fetchData(data.token);
        toast.success('Login successful');
      } else {
        toast.error(data.message || 'Login failed');
      }
    } catch (error) {
      toast.error('Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setToken('');
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
  };

  const handleSaveProject = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const projectData = {
      title: formData.get('title'),
      description: formData.get('description'),
      techStack: (formData.get('techStack') as string)
  .split(',')
  .map((s: string) => s.trim()),
      image: formData.get('image'),
      demoVideo: formData.get('demoVideo'),
      liveDemo: formData.get('liveDemo'),
      github: formData.get('github'),
    };

    try {
      const url = editingProject
        ?`${API_URL}/projects/${editingProject._id}`
        : `${API_URL}/projects`;
      const method = editingProject ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(projectData),
      });

      if (res.ok) {
        toast.success(editingProject ? 'Project updated' : 'Project created');
        setIsProjectDialogOpen(false);
        setEditingProject(null);
        fetchData(token);
      } else {
        toast.error('Failed to save project');
      }
    } catch (error) {
      toast.error('Failed to save project');
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const res = await fetch(`${API_URL}/projects/${id:string}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        toast.success('Project deleted');
        fetchData(token);
      } else {
        toast.error('Failed to delete project');
      }
    } catch (error) {
      toast.error('Failed to delete project');
    }
  };
  

  const handleDeleteContact = async (id) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const res = await fetch(`${API_URL}/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        toast.success('Message deleted');
        fetchData(token);
      } else {
        toast.error('Failed to delete message');
      }
    } catch (error) {
      toast.error('Failed to delete message');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e] flex items-center justify-center p-4">
        <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
              Admin Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Username</label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500"
                  placeholder="Enter password"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0a1a] to-[#1a0a2e] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FolderOpen className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Total Projects</p>
                  <p className="text-2xl font-bold text-white">{stats.projectCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Contact Messages</p>
                  <p className="text-2xl font-bold text-white">{stats.contactCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Dashboard</p>
                  <p className="text-2xl font-bold text-white">Active</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-xl font-bold text-white">Projects</CardTitle>
              <Dialog open={isProjectDialogOpen} onOpenChange={setIsProjectDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => setEditingProject(null)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                  </Button>
                </DialogTrigger>
                <DialogContent className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg text-white max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                      {editingProject ? 'Edit Project' : 'Add New Project'}
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSaveProject} className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">Title</label>
                      <Input
                        name="title"
                        defaultValue={editingProject?.title || ''}
                        required
                        className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500"
                        placeholder="Project title"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">Description</label>
                      <Textarea
                        name="description"
                        defaultValue={editingProject?.description || ''}
                        required
                        className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500 resize-none"
                        placeholder="Project description"
                        rows={4}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">Tech Stack (comma-separated)</label>
                      <Input
                        name="techStack"
                        defaultValue={editingProject?.techStack?.join(', ') || ''}
                        required
                        className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500"
                        placeholder="React, Node.js, MongoDB"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">Image URL</label>
                      <Input
                        name="image"
                        defaultValue={editingProject?.image || ''}
                        className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">Demo Video URL</label>
                      <Input
                        name="demoVideo"
                        defaultValue={editingProject?.demoVideo || ''}
                        className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500"
                        placeholder="https://youtube.com/watch?v=..."
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">Live Demo URL</label>
                      <Input
                        name="liveDemo"
                        defaultValue={editingProject?.liveDemo || ''}
                        className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500"
                        placeholder="https://example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm">GitHub URL</label>
                      <Input
                        name="github"
                        defaultValue={editingProject?.github || ''}
                        className="bg-white/5 border-purple-500/30 text-white placeholder-gray-500"
                        placeholder="https://github.com/username/repo"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                      {editingProject ? 'Update Project' : 'Create Project'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.map((project:any) => (
                <div
                  key={project._id}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-purple-500/20"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.techStack?.slice(0, 3).map((tech:string) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingProject(project);
                        setIsProjectDialogOpen(true);
                      }}
                      className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDeleteProject(project._id)}
                      className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Messages Section */}
        <Card className="glassmorphism border border-purple-500/30 bg-white/5 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white">Contact Messages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {contacts.map((contact:any) => (
                <div
                  key={contact._id}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-purple-500/20"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-white">{contact.name}</h3>
                      <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                        {contact.email}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{contact.subject}</p>
                    <p className="text-gray-500 text-sm line-clamp-1 mt-1">{contact.message}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteContact(contact._id)}
                    className="border-red-500/30 text-red-400 hover:bg-red-500/10 ml-4"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
