import { useState } from 'react';
import { EDUCATIONAL_VIDEOS, EducationalVideo } from '../data/videosData';
import { Play, CheckCircle, ExternalLink, Clock, Sparkles, ShieldCheck, Video as VideoIcon } from 'lucide-react';

export function VideosSection() {
  const [selectedVideo, setSelectedVideo] = useState<EducationalVideo>(EDUCATIONAL_VIDEOS[0]);

  return (
    <section id="videos" className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-700 uppercase tracking-wider mb-2">
            <span>Comunicação em Saúde</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Canais Verificados</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Divulgação Científica</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Vídeos Educativos de Canais Médicos e Científicos Respeitáveis
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Aprenda com explicações claras de autoridades em saúde pública como o Dr. Drauzio Varella, a Fundação Oswaldo Cruz (Fiocruz) e a Organização Pan-Americana da Saúde (OPAS/OMS).
          </p>
        </div>

        {/* Two-Zone Layout: Left Video Player + Right Playlist */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Selected Video Player & Notes (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
            {/* Embedded Responsive Player with clean YouTube embed */}
            <div className="relative aspect-video bg-slate-950 w-full overflow-hidden">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?rel=0`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Meta & Editorial Details */}
            <div className="p-6">
              {/* Channel and Category Metadata line per zero-pill discipline */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-2 flex-wrap">
                <span className="font-semibold text-slate-900">{selectedVideo.channelName}</span>
                <span aria-hidden="true">·</span>
                <span className="text-teal-700 font-medium">{selectedVideo.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedVideo.duration}</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                {selectedVideo.title}
              </h3>

              <p className="text-xs text-slate-500 mt-1 italic">
                {selectedVideo.channelBadge}
              </p>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedVideo.description}
              </p>

              {/* Medical Takeaway Callout */}
              <div className="mt-5 p-4 rounded-xl bg-teal-50/70 border border-teal-200/80 text-teal-950 text-xs sm:text-sm">
                <p className="font-semibold text-teal-900 flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  Conclusão Médica Principal
                </p>
                <p className="text-teal-900 leading-relaxed">
                  {selectedVideo.medicalTakeaway}
                </p>
              </div>

              {/* Key Topics Covered */}
              <div className="mt-5">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Tópicos Abordados no Vídeo:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {selectedVideo.keyTopics.map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Channel Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  Conteúdo educativo com curadoria médica
                </span>
                <a
                  href={selectedVideo.officialSourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-teal-700 hover:text-teal-900 font-medium inline-flex items-center gap-1"
                >
                  <span>Portal Oficial do Canal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Playlist & Selection Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider px-1">
              Biblioteca de Vídeos Educativos ({EDUCATIONAL_VIDEOS.length})
            </h3>

            <div className="space-y-2.5">
              {EDUCATIONAL_VIDEOS.map((video) => {
                const isCurrent = video.id === selectedVideo.id;
                return (
                  <button
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      isCurrent
                        ? 'bg-white border-teal-600 shadow-xs ring-1 ring-teal-600/20'
                        : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isCurrent
                          ? 'bg-teal-600 text-white'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}
                    >
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-0.5">
                        <span className="font-semibold text-teal-800">{video.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{video.duration}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                        {video.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 truncate">
                        {video.channelName}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
