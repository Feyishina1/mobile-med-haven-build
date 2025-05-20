
import React from 'react';
import { Header } from '@/components/layout/Header';
import { BottomNavbar } from '@/components/layout/BottomNavbar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Download, FileText, TrendingUp, Syringe, Bandage } from 'lucide-react';

const MedicalRecordsPage = () => {
  // Mock data for medical records
  const medicalData = {
    visits: [
      {
        id: "v1",
        date: "May 5, 2025",
        doctor: "Dr. Sarah Johnson",
        diagnosis: "Hypertension",
        notes: "Patient presented with elevated blood pressure. Prescribed lisinopril 10mg daily. Follow up in 2 weeks."
      },
      {
        id: "v2",
        date: "April 12, 2025",
        doctor: "Dr. Michael Chen",
        diagnosis: "Migraine",
        notes: "Patient complained of severe headache with visual aura. Prescribed sumatriptan as needed. Advised to keep headache diary."
      },
      {
        id: "v3",
        date: "March 20, 2025",
        doctor: "Dr. Emily Rodriguez",
        diagnosis: "Dermatitis",
        notes: "Patient presented with skin rash on forearms. Prescribed topical hydrocortisone. Allergy testing recommended."
      }
    ],
    tests: [
      {
        id: "t1",
        date: "May 6, 2025",
        name: "Complete Blood Count",
        result: "Normal",
        details: "All values within normal range."
      },
      {
        id: "t2",
        date: "May 6, 2025",
        name: "Lipid Panel",
        result: "Abnormal",
        details: "LDL cholesterol elevated (160 mg/dL). HDL and triglycerides normal."
      },
      {
        id: "t3",
        date: "April 13, 2025",
        name: "MRI - Brain",
        result: "Normal",
        details: "No abnormalities detected. No evidence of structural causes for migraine."
      }
    ],
    medications: [
      {
        id: "m1",
        name: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        prescribed: "May 5, 2025",
        doctor: "Dr. Sarah Johnson"
      },
      {
        id: "m2",
        name: "Sumatriptan",
        dosage: "50mg",
        frequency: "As needed for migraine",
        prescribed: "April 12, 2025",
        doctor: "Dr. Michael Chen"
      },
      {
        id: "m3",
        name: "Hydrocortisone Cream",
        dosage: "1%",
        frequency: "Apply twice daily to affected areas",
        prescribed: "March 20, 2025",
        doctor: "Dr. Emily Rodriguez"
      }
    ],
    vaccinations: [
      {
        id: "vac1",
        name: "Influenza Vaccine",
        date: "November 10, 2024",
        nextDue: "November 2025"
      },
      {
        id: "vac2",
        name: "COVID-19 Booster",
        date: "January 15, 2025",
        nextDue: "January 2026"
      },
      {
        id: "vac3",
        name: "Tetanus/Diphtheria/Pertussis (Tdap)",
        date: "June 5, 2023",
        nextDue: "June 2033"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 pt-20">
      <Header />
      
      {/* Medical Records Summary */}
      <div className="p-4 bg-gradient-to-r from-hospital-blue to-blue-600 text-white">
        <h2 className="font-semibold mb-2">Medical Records</h2>
        <p className="text-sm text-blue-100">Secure access to your complete medical history</p>
      </div>
      
      {/* Medical Records Tabs */}
      <div className="p-4">
        <Tabs defaultValue="visits">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="visits">Visits</TabsTrigger>
            <TabsTrigger value="tests">Tests</TabsTrigger>
            <TabsTrigger value="medications">Meds</TabsTrigger>
            <TabsTrigger value="vaccinations">Vaccines</TabsTrigger>
          </TabsList>
          
          {/* Visits Tab Content */}
          <TabsContent value="visits" className="mt-4">
            <div className="bg-white rounded-lg shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {medicalData.visits.map((visit) => (
                  <AccordionItem key={visit.id} value={visit.id}>
                    <AccordionTrigger className="px-4 py-2">
                      <div className="flex items-center text-left">
                        <FileText className="mr-3 text-hospital-blue" size={16} />
                        <div>
                          <p className="font-medium">{visit.date}</p>
                          <p className="text-sm text-gray-500">{visit.diagnosis}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-2">
                        <p><span className="font-medium">Doctor:</span> {visit.doctor}</p>
                        <p><span className="font-medium">Diagnosis:</span> {visit.diagnosis}</p>
                        <p><span className="font-medium">Notes:</span> {visit.notes}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Download size={14} className="mr-2" />
                          Download Report
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
          
          {/* Tests Tab Content */}
          <TabsContent value="tests" className="mt-4">
            <div className="bg-white rounded-lg shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {medicalData.tests.map((test) => (
                  <AccordionItem key={test.id} value={test.id}>
                    <AccordionTrigger className="px-4 py-2">
                      <div className="flex items-center text-left">
                        <TrendingUp className="mr-3 text-hospital-blue" size={16} />
                        <div>
                          <p className="font-medium">{test.name}</p>
                          <p className="text-sm text-gray-500">{test.date}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-2">
                        <p>
                          <span className="font-medium">Result:</span> 
                          <span className={test.result === "Normal" ? " text-hospital-green" : " text-red-500"}>
                            {" "}{test.result}
                          </span>
                        </p>
                        <p><span className="font-medium">Details:</span> {test.details}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Download size={14} className="mr-2" />
                          Download Report
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
          
          {/* Medications Tab Content */}
          <TabsContent value="medications" className="mt-4">
            <div className="bg-white rounded-lg shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {medicalData.medications.map((medication) => (
                  <AccordionItem key={medication.id} value={medication.id}>
                    <AccordionTrigger className="px-4 py-2">
                      <div className="flex items-center text-left">
                        <Bandage className="mr-3 text-hospital-blue" size={16} />
                        <div>
                          <p className="font-medium">{medication.name}</p>
                          <p className="text-sm text-gray-500">{medication.dosage}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-2">
                        <p><span className="font-medium">Dosage:</span> {medication.dosage}</p>
                        <p><span className="font-medium">Frequency:</span> {medication.frequency}</p>
                        <p><span className="font-medium">Prescribed:</span> {medication.prescribed}</p>
                        <p><span className="font-medium">Doctor:</span> {medication.doctor}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button variant="outline" size="sm">
                            <Download size={14} className="mr-2" />
                            Prescription
                          </Button>
                          <Button size="sm">Refill</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
          
          {/* Vaccinations Tab Content */}
          <TabsContent value="vaccinations" className="mt-4">
            <div className="bg-white rounded-lg shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                {medicalData.vaccinations.map((vaccination) => (
                  <AccordionItem key={vaccination.id} value={vaccination.id}>
                    <AccordionTrigger className="px-4 py-2">
                      <div className="flex items-center text-left">
                        <Syringe className="mr-3 text-hospital-blue" size={16} />
                        <div>
                          <p className="font-medium">{vaccination.name}</p>
                          <p className="text-sm text-gray-500">{vaccination.date}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <div className="space-y-2">
                        <p><span className="font-medium">Date Administered:</span> {vaccination.date}</p>
                        <p><span className="font-medium">Next Due:</span> {vaccination.nextDue}</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          <Download size={14} className="mr-2" />
                          Vaccination Record
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <BottomNavbar />
    </div>
  );
};

export default MedicalRecordsPage;
