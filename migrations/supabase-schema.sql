-- Create RSVP table
CREATE TABLE IF NOT EXISTS rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  attendance TEXT NOT NULL CHECK (attendance IN ('yes', 'no')),
  plus_one BOOLEAN NOT NULL DEFAULT false,
  plus_one_name TEXT,
  dietary_restrictions TEXT,
  meal_preference TEXT,
  song_request TEXT,
  special_accommodations TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert RSVPs
CREATE POLICY "Allow RSVP submissions" ON rsvps
  FOR INSERT WITH CHECK (true);

-- Create policy to allow reading RSVPs (you might want to restrict this)
CREATE POLICY "Allow reading RSVPs" ON rsvps
  FOR SELECT USING (true);

-- Optional: Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_rsvps_email ON rsvps(email);
CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at);