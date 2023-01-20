const relationNames = {
  mm: 'Many To Many',
  hm: 'Has Many',
  bt: 'Belongs To',
} as const

export function getRelationName(type: string) {
  return relationNames[type as keyof typeof relationNames]
}

// supported mime types
// retrieved from https://github.com/sindresorhus/file-type/blob/main/supported.js#L146
export const fileMimeTypes = [
  {
    title: 'Application',
    key: 'application',
    children: [
      { title: 'application/dicom', key: 'application/dicom' },
      { title: 'application/eps', key: 'application/eps' },
      { title: 'application/epub+zip', key: 'application/epub+zip' },
      { title: 'application/gzip', key: 'application/gzip' },
      { title: 'application/mxf', key: 'application/mxf' },
      { title: 'application/ogg', key: 'application/ogg' },
      { title: 'application/pdf', key: 'application/pdf' },
      { title: 'application/pgp-encrypted', key: 'application/pgp-encrypted' },
      { title: 'application/postscript', key: 'application/postscript' },
      { title: 'application/rtf', key: 'application/rtf' },
      { title: 'application/vnd.ms-asf', key: 'application/vnd.ms-asf' },
      { title: 'application/vnd.ms-cab-compressed', key: 'application/vnd.ms-cab-compressed' },
      { title: 'application/vnd.ms-fontobject', key: 'application/vnd.ms-fontobject' },
      { title: 'application/vnd.ms-htmlhelp', key: 'application/vnd.ms-htmlhelp' },
      { title: 'application/vnd.ms-outlook', key: 'application/vnd.ms-outlook' },
      { title: 'application/vnd.oasis.opendocument.presentation', key: 'application/vnd.oasis.opendocument.presentation' },
      { title: 'application/vnd.oasis.opendocument.spreadsheet', key: 'application/vnd.oasis.opendocument.spreadsheet' },
      { title: 'application/vnd.oasis.opendocument.text', key: 'application/vnd.oasis.opendocument.text' },
      {
        title: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        key: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      },
      {
        title: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        key: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
      {
        title: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        key: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      },
      { title: 'application/vnd.sketchup.skp', key: 'application/vnd.sketchup.skp' },
      { title: 'application/vnd.tcpdump.pcap', key: 'application/vnd.tcpdump.pcap' },
      { title: 'application/wasm', key: 'application/wasm' },
      { title: 'application/x-7z-compressed', key: 'application/x-7z-compressed' },
      { title: 'application/x-apache-arrow', key: 'application/x-apache-arrow' },
      { title: 'application/x-apple-diskimage', key: 'application/x-apple-diskimage' },
      { title: 'application/x-asar', key: 'application/x-asar' },
      { title: 'application/x-blender', key: 'application/x-blender' },
      { title: 'application/x-bzip2', key: 'application/x-bzip2' },
      { title: 'application/x-cfb', key: 'application/x-cfb' },
      { title: 'application/x-compress', key: 'application/x-compress' },
      { title: 'application/x-deb', key: 'application/x-deb' },
      { title: 'application/x-elf', key: 'application/x-elf' },
      { title: 'application/x-esri-shape', key: 'application/x-esri-shape' },
      { title: 'application/x-google-chrome-extension', key: 'application/x-google-chrome-extension' },
      { title: 'application/x-indesign', key: 'application/x-indesign' },
      { title: 'application/x-lzh-compressed', key: 'application/x-lzh-compressed' },
      { title: 'application/x-lzip', key: 'application/x-lzip' },
      { title: 'application/x-mie', key: 'application/x-mie' },
      { title: 'application/x-mobipocket-ebook', key: 'application/x-mobipocket-ebook' },
      { title: 'application/x-msdownload', key: 'application/x-msdownload' },
      { title: 'application/x-nintendo-nes-rom', key: 'application/x-nintendo-nes-rom' },
      { title: 'application/x-rar-compressed', key: 'application/x-rar-compressed' },
      { title: 'application/x-rpm', key: 'application/x-rpm' },
      { title: 'application/x-shockwave-flash', key: 'application/x-shockwave-flash' },
      { title: 'application/x-sqlite3', key: 'application/x-sqlite3' },
      { title: 'application/x-tar', key: 'application/x-tar' },
      { title: 'application/x-unix-archive', key: 'application/x-unix-archive' },
      { title: 'application/x-xpinstall', key: 'application/x-xpinstall' },
      { title: 'application/x-xz', key: 'application/x-xz' },
      { title: 'application/x.apple.alias', key: 'application/x.apple.alias' },
      { title: 'application/x.ms.shortcut', key: 'application/x.ms.shortcut' },
      { title: 'application/xml', key: 'application/xml' },
      { title: 'application/zip', key: 'application/zip' },
      { title: 'application/zstd', key: 'application/zstd' },
    ],
  },
  {
    title: 'Audio',
    key: 'audio',
    children: [
      { title: 'audio/aac', key: 'audio/aac' },
      { title: 'audio/aiff', key: 'audio/aiff' },
      { title: 'audio/amr', key: 'audio/amr' },
      { title: 'audio/ape', key: 'audio/ape' },
      { title: 'audio/midi', key: 'audio/midi' },
      { title: 'audio/mp4', key: 'audio/mp4' },
      { title: 'audio/mpeg', key: 'audio/mpeg' },
      { title: 'audio/ogg', key: 'audio/ogg' },
      { title: 'audio/opus', key: 'audio/opus' },
      { title: 'audio/qcelp', key: 'audio/qcelp' },
      { title: 'audio/vnd.dolby.dd-raw', key: 'audio/vnd.dolby.dd-raw' },
      { title: 'audio/vnd.wave', key: 'audio/vnd.wave' },
      { title: 'audio/wavpack', key: 'audio/wavpack' },
      { title: 'audio/x-dsf', key: 'audio/x-dsf' },
      { title: 'audio/x-flac', key: 'audio/x-flac' },
      { title: 'audio/x-it', key: 'audio/x-it' },
      { title: 'audio/x-m4a', key: 'audio/x-m4a' },
      { title: 'audio/x-ms-asf', key: 'audio/x-ms-asf' },
      { title: 'audio/x-musepack', key: 'audio/x-musepack' },
      { title: 'audio/x-s3m', key: 'audio/x-s3m' },
      { title: 'audio/x-voc', key: 'audio/x-voc' },
      { title: 'audio/x-xm', key: 'audio/x-xm' },
    ],
  },
  {
    title: 'Image',
    key: 'image',
    children: [
      { title: 'image/apng', key: 'image/apng' },
      { title: 'image/avif', key: 'image/avif' },
      { title: 'image/bmp', key: 'image/bmp' },
      { title: 'image/bpg', key: 'image/bpg' },
      { title: 'image/flif', key: 'image/flif' },
      { title: 'image/gif', key: 'image/gif' },
      { title: 'image/heic', key: 'image/heic' },
      { title: 'image/heic-sequence', key: 'image/heic-sequence' },
      { title: 'image/heif', key: 'image/heif' },
      { title: 'image/heif-sequence', key: 'image/heif-sequence' },
      { title: 'image/icns', key: 'image/icns' },
      { title: 'image/jls', key: 'image/jls' },
      { title: 'image/jp2', key: 'image/jp2' },
      { title: 'image/jpeg', key: 'image/jpeg' },
      { title: 'image/jpm', key: 'image/jpm' },
      { title: 'image/jpx', key: 'image/jpx' },
      { title: 'image/jxl', key: 'image/jxl' },
      { title: 'image/ktx', key: 'image/ktx' },
      { title: 'image/mj2', key: 'image/mj2' },
      { title: 'image/png', key: 'image/png' },
      { title: 'image/tiff', key: 'image/tiff' },
      { title: 'image/vnd.adobe.photoshop', key: 'image/vnd.adobe.photoshop' },
      { title: 'image/vnd.dwg', key: 'image/vnd.dwg' },
      { title: 'image/vnd.ms-photo', key: 'image/vnd.ms-photo' },
      { title: 'image/webp', key: 'image/webp' },
      { title: 'image/x-adobe-dng', key: 'image/x-adobe-dng' },
      { title: 'image/x-canon-cr2', key: 'image/x-canon-cr2' },
      { title: 'image/x-canon-cr3', key: 'image/x-canon-cr3' },
      { title: 'image/x-fujifilm-raf', key: 'image/x-fujifilm-raf' },
      { title: 'image/x-icon', key: 'image/x-icon' },
      { title: 'image/x-nikon-nef', key: 'image/x-nikon-nef' },
      { title: 'image/x-olympus-orf', key: 'image/x-olympus-orf' },
      { title: 'image/x-panasonic-rw2', key: 'image/x-panasonic-rw2' },
      { title: 'image/x-sony-arw', key: 'image/x-sony-arw' },
      { title: 'image/x-xcf', key: 'image/x-xcf' },
    ],
  },
  {
    title: 'Video',
    key: 'video',
    children: [
      { title: 'video/3gpp', key: 'video/3gpp' },
      { title: 'video/3gpp2', key: 'video/3gpp2' },
      { title: 'video/MP1S', key: 'video/MP1S' },
      { title: 'video/MP2P', key: 'video/MP2P' },
      { title: 'video/mp2t', key: 'video/mp2t' },
      { title: 'video/mp4', key: 'video/mp4' },
      { title: 'video/mpeg', key: 'video/mpeg' },
      { title: 'video/ogg', key: 'video/ogg' },
      { title: 'video/quicktime', key: 'video/quicktime' },
      { title: 'video/vnd.avi', key: 'video/vnd.avi' },
      { title: 'video/webm', key: 'video/webm' },
      { title: 'video/x-flv', key: 'video/x-flv' },
      { title: 'video/x-m4v', key: 'video/x-m4v' },
      { title: 'video/x-matroska', key: 'video/x-matroska' },
      { title: 'video/x-ms-asf', key: 'video/x-ms-asf' },
    ],
  },
  {
    title: 'Misc',
    key: 'misc',
    children: [
      { title: 'model/3mf', key: 'model/3mf' },
      { title: 'model/gltf-binary', key: 'model/gltf-binary' },
      { title: 'model/stl', key: 'model/stl' },
      { title: 'text/calendar', key: 'text/calendar' },
      { title: 'text/vcard', key: 'text/vcard' },

      { title: 'font/otf', key: 'font/otf' },
      { title: 'font/ttf', key: 'font/ttf' },
      { title: 'font/woff', key: 'font/woff' },
      { title: 'font/woff2', key: 'font/woff2' },
    ],
  },
]

export const fileMimeTypeList = fileMimeTypes.map((o) => o.children).flat(1)
