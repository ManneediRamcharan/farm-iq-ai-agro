import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Truck, 
  Search, 
  MapPin, 
  Calendar,
  Clock,
  Star,
  Phone,
  Shield,
  Wrench,
  Fuel,
  Settings
} from "lucide-react";

const EquipmentRental = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");

  const equipment = [
    {
      id: 1,
      name: "John Deere Tractor 5310",
      type: "Tractor",
      owner: "Ramesh Agriculture Services",
      location: "Pune, Maharashtra",
      rating: 4.8,
      pricePerDay: "₹2,500",
      pricePerHour: "₹350",
      available: true,
      image: "🚜",
      features: ["GPS Enabled", "Air Conditioning", "PTO", "Hydraulic Lift"],
      specifications: {
        power: "75 HP",
        fuel: "Diesel",
        year: "2020"
      }
    },
    {
      id: 2,
      name: "Mahindra Harvester",
      type: "Harvester",
      owner: "Green Valley Equipment",
      location: "Nashik, Maharashtra",
      rating: 4.6,
      pricePerDay: "₹4,000",
      pricePerHour: "₹500",
      available: true,
      image: "🌾",
      features: ["Auto Steering", "Grain Tank", "Chopper", "Self-Propelled"],
      specifications: {
        power: "120 HP",
        fuel: "Diesel", 
        year: "2019"
      }
    },
    {
      id: 3,
      name: "Rotary Tiller",
      type: "Tiller",
      owner: "Modern Farm Tools",
      location: "Satara, Maharashtra",
      rating: 4.9,
      pricePerDay: "₹800",
      pricePerHour: "₹120",
      available: false,
      image: "🔧",
      features: ["Heavy Duty", "Adjustable Depth", "Side Drive", "Oil Bath Gearbox"],
      specifications: {
        width: "6 feet",
        type: "Rotary",
        year: "2021"
      }
    },
    {
      id: 4,
      name: "Water Pump Set",
      type: "Pump",
      owner: "AquaTech Solutions",
      location: "Pune, Maharashtra", 
      rating: 4.7,
      pricePerDay: "₹600",
      pricePerHour: "₹80",
      available: true,
      image: "💧",
      features: ["High Pressure", "Self Priming", "Portable", "Low Maintenance"],
      specifications: {
        power: "5 HP",
        fuel: "Electric",
        year: "2022"
      }
    }
  ];

  const myRentals = [
    {
      equipment: "John Deere Tractor 5310",
      renter: "Suresh Patil",
      startDate: "2024-01-15",
      endDate: "2024-01-20",
      status: "Active",
      amount: "₹12,500"
    },
    {
      equipment: "Rotary Tiller",
      renter: "Madhav Farmers Collective",
      startDate: "2024-01-10",
      endDate: "2024-01-12", 
      status: "Completed",
      amount: "₹1,600"
    }
  ];

  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === "all" || 
                           item.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-r from-success to-primary rounded-lg">
          <Truck className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Equipment Rental</h1>
          <p className="text-muted-foreground">Rent or list agricultural equipment and machinery</p>
        </div>
      </div>

      <Tabs defaultValue="rent" className="space-y-6">
        <TabsList className="grid w-fit grid-cols-3">
          <TabsTrigger value="rent">Rent Equipment</TabsTrigger>
          <TabsTrigger value="list">List Equipment</TabsTrigger>
          <TabsTrigger value="manage">My Rentals</TabsTrigger>
        </TabsList>

        <TabsContent value="rent" className="space-y-6">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-48">
                <MapPin className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="nashik">Nashik</SelectItem>
                <SelectItem value="satara">Satara</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Equipment Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredEquipment.map((item) => (
              <Card key={item.id} className={`border-0 shadow-card-shadow hover:shadow-hover-lift transition-all duration-300 ${!item.available ? 'opacity-75' : ''}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-4xl">{item.image}</div>
                      <div>
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{item.type}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge 
                            className={item.available 
                              ? "bg-success/10 text-success border-success/20" 
                              : "bg-destructive/10 text-destructive border-destructive/20"
                            }
                          >
                            {item.available ? "Available" : "Rented"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-primary">{item.pricePerDay}</p>
                      <p className="text-xs text-muted-foreground">per day</p>
                      <p className="text-sm text-muted-foreground">{item.pricePerHour}/hour</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Owner</p>
                      <p className="font-medium">{item.owner}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p className="font-medium flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-muted/50 rounded">
                      <p className="text-muted-foreground">Power</p>
                      <p className="font-medium">{item.specifications.power || item.specifications.width}</p>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded">
                      <p className="text-muted-foreground">Fuel</p>
                      <p className="font-medium">{item.specifications.fuel || item.specifications.type}</p>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded">
                      <p className="text-muted-foreground">Year</p>
                      <p className="font-medium">{item.specifications.year}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Features</p>
                    <div className="flex flex-wrap gap-1">
                      {item.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {item.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{item.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span className="text-sm font-medium">{item.rating}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Phone className="h-3 w-3" />
                      </Button>
                      <Button size="sm" disabled={!item.available}>
                        <Calendar className="mr-1 h-3 w-3" />
                        {item.available ? "Book Now" : "Unavailable"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-6">
          <Card className="border-0 shadow-card-shadow">
            <CardHeader>
              <CardTitle>List Your Equipment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Equipment Name</label>
                  <Input placeholder="e.g., John Deere Tractor 5310" />
                </div>
                <div>
                  <label className="text-sm font-medium">Type</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tractor">Tractor</SelectItem>
                      <SelectItem value="harvester">Harvester</SelectItem>
                      <SelectItem value="tiller">Tiller</SelectItem>
                      <SelectItem value="pump">Pump</SelectItem>
                      <SelectItem value="sprayer">Sprayer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-medium">Price per Day (₹)</label>
                  <Input type="number" placeholder="2500" />
                </div>
                <div>
                  <label className="text-sm font-medium">Price per Hour (₹)</label>
                  <Input type="number" placeholder="350" />
                </div>
                <div>
                  <label className="text-sm font-medium">Year</label>
                  <Input type="number" placeholder="2020" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Specifications</label>
                  <Input placeholder="e.g., 75 HP, Diesel, 4WD" />
                </div>
                <div>
                  <label className="text-sm font-medium">Location</label>
                  <Input placeholder="e.g., Pune, Maharashtra" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Features (comma separated)</label>
                <Input placeholder="e.g., GPS Enabled, Air Conditioning, PTO" />
              </div>

              <Button className="w-full">
                <Settings className="mr-2 h-4 w-4" />
                List Equipment
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Active Rentals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {myRentals.filter(rental => rental.status === "Active").map((rental, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{rental.equipment}</h4>
                      <Badge className="bg-success/10 text-success border-success/20">
                        {rental.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Renter</p>
                        <p className="font-medium">{rental.renter}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium text-primary">{rental.amount}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Start Date</p>
                        <p className="font-medium">{rental.startDate}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">End Date</p>
                        <p className="font-medium">{rental.endDate}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2 mt-3">
                      <Button size="sm" variant="outline">
                        <Phone className="mr-1 h-3 w-3" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline">
                        <Shield className="mr-1 h-3 w-3" />
                        Track
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card-shadow">
              <CardHeader>
                <CardTitle>Rental History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {myRentals.filter(rental => rental.status === "Completed").map((rental, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{rental.equipment}</h4>
                      <Badge variant="secondary">
                        {rental.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Renter</p>
                        <p className="font-medium">{rental.renter}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium text-primary">{rental.amount}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium">{rental.startDate} to {rental.endDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EquipmentRental;