require 'asciidoctor'

source_file = ARGV[0]
if !source_file
  warn 'You must provide a source file'
  exit 1
end
output_file = source_file.sub(/\.adoc$/, '-single.adoc')
source = File.read source_file
doc = Asciidoctor.load_file ARGV[0], :safe => :safe, :parse_header_only => true
reader = Asciidoctor::PreprocessorReader.new doc, source
preprocessed_source = reader.read.gsub(/^include::/, '\\include::')
File.open(output_file, 'w') {|f| f.write preprocessed_source }