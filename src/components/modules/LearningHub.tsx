import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Search, 
  Play, 
  Clock, 
  Users,
  Star,
  Award,
  Download,
  FileText,
  Video,
  Headphones,
  Globe,
  Bookmark
} from "lucide-react";

const LearningHub = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courses = [
    {
      id: 1,
      title: "Modern Crop Management Techniques",
      category: "crop-management",
      instructor: "Dr. Rajesh Sharma",
      duration: "4 hours",
      lessons: 12,
      students: 1250,
      rating: 4.8,
      progress: 65,
      level: "Intermediate",
      language: "Hindi/English",
      thumbnail: "🌱",
      description: "Learn advanced techniques for maximizing crop yield and quality through modern farming practices.",
      tags: ["Irrigation", "Soil Health", "Pest Control"]
    },
    {
      id: 2,
      title: "Organic Farming Fundamentals",
      category: "organic-farming",
      instructor: "Prof. Sunita Patel",
      duration: "6 hours",
      lessons: 18,
      students: 890,
      rating: 4.9,
      progress: 0,
      level: "Beginner",
      language: "English",
      thumbnail: "🌿",
      description: "Complete guide to organic farming methods, certification process, and market opportunities.",
      tags: ["Organic", "Certification", "Marketing"]
    },
    {
      id: 3,
      title: "Smart Irrigation Systems",
      category: "technology",
      instructor: "Eng. Amit Kumar",
      duration: "3 hours",
      lessons: 8,
      students: 650,
      rating: 4.7,
      progress: 100,
      level: "Advanced",
      language: "Hindi",
      thumbnail: "💧",
      description: "Master modern irrigation technologies including drip systems, sensors, and automation.",
      tags: ["IoT", "Water Management", "Automation"]
    },
    {
      id: 4,
      title: "Financial Planning for Farmers",
      category: "business",
      instructor: "CA Priya Joshi",
      duration: "5 hours",
      lessons: 15,
      students: 1100,
      rating: 4.6,
      progress: 25,
      level: "Intermediate",
      language: "English/Hindi",
      thumbnail: "📊",
      description: "Learn budgeting, investment planning, insurance, and government schemes for farmers.",
      tags: ["Finance", "Insurance", "Subsidies"]
    }
  ];

  const webinars = [
    {
      title: "Climate-Smart Agriculture",
      date: "2024-01-25",
      time: "7:00 PM",
      speaker: "Dr. Meera Singh",
      attendees: 450,
      status: "upcoming"
    },
    {
      title: "Precision Farming with Drones",
      date: "2024-01-20",
      time: "6:30 PM", 
      speaker: "Tech. Rahul Verma",
      attendees: 320,
      status: "completed"
    }
  ];

  const resources = [
    {
      title: "Crop Disease Identification Guide",
      type: "PDF",
      size: "2.5 MB",
      downloads: 1200,
      category: "Reference"
    },
    {
      title: "Seasonal Farming Calendar",
      type: "PDF",
      size: "1.8 MB",
      downloads: 890,
      category: "Planning"
    },
    {
      title: "Government Schemes Handbook",
      type: "PDF", 
      size: "3.2 MB",
      downloads: 2100,
      category: "Finance"
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-r from-warning to-accent rounded-lg">
          <BookOpen className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Learning Hub</h1>
          <p className="text-muted-foreground">Enhance your farming knowledge with expert-led courses and resources</p>
        </div>
      </div>

      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList className="grid w-fit grid-cols-4">
          <TabsTrigger value="courses">Courses</TabsTrigger>
          <TabsTrigger value="webinars">Webinars</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="progress">My Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="crop-management">Crop Management</SelectItem>
                <SelectItem value="organic-farming">Organic Farming</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <div className="text-4xl">{course.thumbnail}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg leading-tight">{course.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">by {course.instructor}</p>
                        </div>
                        <Badge 
                          className={
                            course.level === "Beginner" ? "bg-success/10 text-success border-success/20" :
                            course.level === "Intermediate" ? "bg-warning/10 text-warning border-warning/20" :
                            "bg-destructive/10 text-destructive border-destructive/20"
                          }
                        >
                          {course.level}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Play className="h-3 w-3" />
                          <span>{course.lessons} lessons</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{course.students}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-warning fill-current" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {course.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 text-sm">
                    <Globe className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{course.language}</span>
                  </div>

                  {course.progress > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}

                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <Play className="mr-1 h-3 w-3" />
                      {course.progress > 0 ? "Continue" : "Start Course"}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Bookmark className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="webinars" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Upcoming Webinars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {webinars.filter(w => w.status === "upcoming").map((webinar, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
                    <h4 className="font-medium mb-2">{webinar.title}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                      <div>📅 {webinar.date}</div>
                      <div>🕒 {webinar.time}</div>
                      <div>🎤 {webinar.speaker}</div>
                      <div>👥 {webinar.attendees} registered</div>
                    </div>
                    <Button size="sm" className="w-full">
                      <Video className="mr-2 h-3 w-3" />
                      Register Now
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Past Webinars</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {webinars.filter(w => w.status === "completed").map((webinar, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">{webinar.title}</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                      <div>📅 {webinar.date}</div>
                      <div>🎤 {webinar.speaker}</div>
                      <div>👥 {webinar.attendees} attended</div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      <Play className="mr-2 h-3 w-3" />
                      Watch Recording
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card className="border-0 shadow-card-shadow">
            <CardHeader>
              <CardTitle>Downloadable Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{resource.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{resource.type}</span>
                          <span>{resource.size}</span>
                          <span>{resource.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{resource.category}</Badge>
                      <Button size="sm">
                        <Download className="mr-1 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Learning Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-primary">3</p>
                    <p className="text-sm text-muted-foreground">Courses Started</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-success">1</p>
                    <p className="text-sm text-muted-foreground">Completed</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-warning">15</p>
                    <p className="text-sm text-muted-foreground">Hours Learned</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <p className="text-2xl font-bold text-accent">2</p>
                    <p className="text-sm text-muted-foreground">Certificates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-success/10 rounded-lg border border-success/20">
                  <Award className="h-6 w-6 text-success" />
                  <div>
                    <p className="font-medium text-success">First Course Completed</p>
                    <p className="text-xs text-muted-foreground">Smart Irrigation Systems</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <Headphones className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-medium text-primary">Webinar Attendee</p>
                    <p className="text-xs text-muted-foreground">Attended 2 live webinars</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-card-shadow">
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses.filter(c => c.progress > 0 && c.progress < 100).map((course) => (
                <div key={course.id} className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl">{course.thumbnail}</div>
                  <div className="flex-1">
                    <h4 className="font-medium">{course.title}</h4>
                    <div className="flex items-center justify-between mt-2">
                      <Progress value={course.progress} className="flex-1 mr-4" />
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                  </div>
                  <Button size="sm">
                    <Play className="mr-1 h-3 w-3" />
                    Continue
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningHub;