import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// import { getEnvVars } from "./getEnv"

// const { clientId, clientSecret } = getEnvVars();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getCurrentPlaying() {
  try {
    const response = await fetch("https://fetch-spotify-backend-production.up.railway.app/api/v1/get-currently-playing-track", {
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error fetching current playing:', error)
    throw error
  }
}

export async function getRecentTracks() {
  try {
    const response = await fetch("https://fetch-spotify-backend-production.up.railway.app/api/v1/get-recently-played-tracks", {
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    // Return the most recent track data
    if (!data.items || data.items.length === 0) {
      return { message: "No recent tracks found" }
    }

    return data.items[0]
  } catch (error) {
    console.error('Error fetching current playing:', error)
    throw error
  }
}

export async function refreshToken() {
  try {
    const response = await fetch("https://fetch-spotify-backend-production.up.railway.app/api/v1/refresh-token", {
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()

    // Check if user is currently playing something
    if (!data.item) {
      return "Nothing currently playing"
    }

    const songName = data.item.name
    const artistName = data.item.artists[0]?.name || "Unknown Artist"
    return `${songName} by ${artistName}`
  } catch (error) {
    console.error('Error fetching current playing:', error)
    throw error
  }
}