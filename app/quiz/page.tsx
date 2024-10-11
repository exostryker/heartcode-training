"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { useRouter } from "next/navigation"; // For navigation

// Define the insertOneUser function

// Form schema validation using Zod
const formSchema = z.object({
  name: z
    .string({
      required_error: "Please enter a name",
    })
    .min(2, {
      message: "Name must be more than 2 characters long",
    })
    .max(20, {
      message: "Name must be no longer than 20 characters",
    }),
  question1: z.string({
    required_error: "Please select an option",
  }),
  question2: z.string().min(1, { message: "Please select an option" }),
  question3: z.string().min(1, { message: "Please select an option" }),
  question4: z.string().min(1, { message: "Please select an option" }),
  question5: z.string().min(1, { message: "Please select an option" }),
});

export default function Quiz() {
  const [step, setStep] = useState(0); // Track current question step
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if form is submitted
  const router = useRouter(); // For navigation

  async function insertOneUser(name: string, isDrugDealer: boolean) {
    // Simulate a call to save user data
    console.log(`User ${name} is ${isDrugDealer ? "" : "not "}a drug dealer.`);
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
    },
  });

  // Submit function
  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitted(true); // Mark form as submitted
    if (step < 4) {
      setStep((prev) => prev + 1); // Move to the next question
      setIsSubmitted(false); // Reset form submission status
    } else {
      // On last question submission
      const isDrugDealer = data.question1 === "yes";
      await insertOneUser(data.name, isDrugDealer); // Save user data

      toast({
        title: `Thank you ${data.name}`,
        description: "Your responses have been recorded.",
      });

      // Redirect to Thank You page
      router.push("/thank-you");
    }
  }

  // Handling "Enter" key for next question
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission
      onSubmit(form.getValues()); // Call the submit function
    }
  };

  // Questions array for dynamic rendering
  const questions = [
    {
      label: "What is your name?",
      name: "name",
      component: (
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 1:</FormLabel>
              <FormDescription>What is your name?</FormDescription>
              <FormControl>
                <Input
                  placeholder="Your name here"
                  {...field}
                  onKeyDown={handleKeyDown} // Call next question on Enter key
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      label: "Do you sell drugs?",
      name: "question1",
      component: (
        <FormField
          control={form.control}
          name="question1"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 2:</FormLabel>
              <FormDescription>Do you sell drugs?</FormDescription>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.trigger("question1"); // Trigger validation to enable Next button
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      label: "Have you ever witnessed drug abuse?",
      name: "question2",
      component: (
        <FormField
          control={form.control}
          name="question2"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 3:</FormLabel>
              <FormDescription>
                Have you ever witnessed drug abuse?
              </FormDescription>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.trigger("question2"); // Trigger validation to enable Next button
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      label: "Do you believe drug education is effective?",
      name: "question3",
      component: (
        <FormField
          control={form.control}
          name="question3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 4:</FormLabel>
              <FormDescription>
                Do you believe drug education is effective?
              </FormDescription>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.trigger("question3"); // Trigger validation to enable Next button
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      label: "Would you support stricter drug laws?",
      name: "question4",
      component: (
        <FormField
          control={form.control}
          name="question4"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 5:</FormLabel>
              <FormDescription>
                Would you support stricter drug laws?
              </FormDescription>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  form.trigger("question4"); // Trigger validation to enable Next button
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Please select an answer" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="yes">Yes</SelectItem>
                  <SelectItem value="no">No</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
  ];

  return (
    <div className="max-w-md mx-auto p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Progress Bar */}
          <div className="mb-4">
            <div
              className="h-2 bg-blue-600"
              style={{ width: `${(step + 1) * (100 / questions.length)}%` }}
            />
            <p className="text-sm text-center mt-1">{`Question ${step + 1} of ${
              questions.length
            }`}</p>
          </div>

          {/* Display the current question */}
          {questions[step].component}

          <Button
            type="submit"
            onClick={() => onSubmit(form.getValues())} // Call submit function on click
          >
            {step < questions.length - 1 ? "Next" : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
