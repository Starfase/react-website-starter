import { useEffect, useState } from "react";
import { client } from "../../sanity/client";
import { ANNOUNCEMENT_QUERY } from "../../queries/announcement";

function AnnouncementBar() {
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnnouncement() {
      try {
        const data = await client.fetch(ANNOUNCEMENT_QUERY);
        setAnnouncement(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAnnouncement();
  }, []);

  if (loading) {
    return <div className="h-10 bg-green-700"></div>;
  }

  if (!announcement) return null;

  return (
    <div className="h-10 overflow-hidden bg-green-700 text-white">
      <div className="flex h-full items-center">
        <div className="animate-marquee">
          <span className="px-10 font-medium">📢 {announcement.message}</span>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;
