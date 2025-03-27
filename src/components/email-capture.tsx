"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import confetti from "canvas-confetti";
import { createClient } from "../../supabase/client";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Insert email into waitlist table
      const { error: insertError } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (insertError) {
        if (insertError.code === "23505") {
          // Unique violation
          setError("This email is already on our waitlist!");
        } else {
          setError("Something went wrong. Please try again.");
        }
        setLoading(false);
        return;
      }

      setLoading(false);
      setSubmitted(true);
      setEmail("");

      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {submitted ? (
        <div className="text-center py-4 px-6 bg-perfume rounded-lg border border-melrose">
          <h3 className="text-lg font-semibold text-governor-bay mb-1">
            You're on the list!
          </h3>
          <p className="text-kimberly">
            We'll notify you when Screenshow launches.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col sm:flex-row shadow-lg rounded-lg overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 flex-grow text-kimberly focus:outline-none focus:ring-2 focus:ring-electric-violet border-0 h-[52px]"
              required
            />
            <Button
              type="submit"
              className="px-6 bg-electric-violet text-white rounded-none hover:bg-cornflower-blue transition-colors font-medium h-[52px] whitespace-nowrap"
              disabled={loading}
            >
              {loading ? "Joining..." : "Join Waitlist"}
            </Button>
          </div>
          {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}
        </form>
      )}
    </div>
  );
}
