var search_data = {"index":{"searchIndex":["ark","git","giterror","log","text","textbuilder","timer","add()","dbg()","indent()","is_modified?()","is_repository?()","msg()","new()","next()","print()","pulse()","push()","reset()","revision()","say()","skip()","time()","to_s()","version()","version_line()","wrap()","wrap()","wrap_segments()","wrn()","readme"],"longSearchIndex":["ark","ark::git","ark::git::giterror","ark::log","ark::text","ark::textbuilder","ark::timer","ark::textbuilder#add()","ark::log#dbg()","ark::textbuilder#indent()","ark::git::is_modified?()","ark::git::is_repository?()","ark::log#msg()","ark::textbuilder::new()","ark::textbuilder#next()","ark::textbuilder#print()","ark::log#pulse()","ark::textbuilder#push()","ark::timer::reset()","ark::git::revision()","ark::log#say()","ark::textbuilder#skip()","ark::timer::time()","ark::textbuilder#to_s()","ark::git::version()","ark::git::version_line()","ark::text::wrap()","ark::textbuilder#wrap()","ark::text::wrap_segments()","ark::log#wrn()",""],"info":[["Ark","","Ark.html","","<p>ark-util - utility library for ark-* gems Copyright 2015 Macquarie\nSharpless &lt;macquarie.sharpless@gmail.com&gt; …\n"],["Ark::Git","","Ark/Git.html","","<p>Methods for getting version numbers and revision hashes from a git\nrepository. Version information is …\n"],["Ark::Git::GitError","","Ark/Git/GitError.html","","<p>Raised when trying to get the revision number from a non-repository\n"],["Ark::Log","","Ark/Log.html","","<p>Logging/messaging facilities intended for STDOUT\n"],["Ark::Text","","Ark/Text.html","","<p>Methods for manipulating text\n"],["Ark::TextBuilder","","Ark/TextBuilder.html","","<p>Build text progressively, line by line\n"],["Ark::Timer","","Ark/Timer.html","","<p>A stopwatch-like timer\n"],["add","Ark::TextBuilder","Ark/TextBuilder.html#method-i-add","(*str)","<p>Concatenate any strings given, then append them to the last element on the\nline. No spaces will be added …\n"],["dbg","Ark::Log","Ark/Log.html#method-i-dbg","(str, indent=0)","<p>Write high-verbosity debugging information to STDOUT\n"],["indent","Ark::TextBuilder","Ark/TextBuilder.html#method-i-indent","(count)","<p>Indent the current line by <code>count</code> columns\n"],["is_modified?","Ark::Git","Ark/Git.html#method-c-is_modified-3F","(path)",""],["is_repository?","Ark::Git","Ark/Git.html#method-c-is_repository-3F","(path=nil)",""],["msg","Ark::Log","Ark/Log.html#method-i-msg","(str, indent=0)","<p>Write a low-verbosity message to STDOUT\n"],["new","Ark::TextBuilder","Ark/TextBuilder.html#method-c-new","()","<p>Initialize a TextBuilder instance\n"],["next","Ark::TextBuilder","Ark/TextBuilder.html#method-i-next","(str=nil)","<p>Start a new line. If <code>str</code> is provided, push <code>str</code>\nonto the new line\n"],["print","Ark::TextBuilder","Ark/TextBuilder.html#method-i-print","()","<p>Print the constructed text\n"],["pulse","Ark::Log","Ark/Log.html#method-i-pulse","(str, time, &block)","<p>Pulse a message for the duration of the execution of a block\n"],["push","Ark::TextBuilder","Ark/TextBuilder.html#method-i-push","(*str)","<p>Push one or more strings onto the current line\n"],["reset","Ark::Timer","Ark/Timer.html#method-c-reset","()","<p>Reset the timer start time to now\n"],["revision","Ark::Git","Ark/Git.html#method-c-revision","(path)",""],["say","Ark::Log","Ark/Log.html#method-i-say","(msg, sym='...', loud=false, indent=0)","<p>Write <code>msg</code> to standard output according to verbosity settings.\nNot meant to be used directly\n"],["skip","Ark::TextBuilder","Ark/TextBuilder.html#method-i-skip","(str=nil)","<p>Insert a blank line and start the line after it. If <code>str</code> is\ngiven, push <code>str</code> onto the new line.\n"],["time","Ark::Timer","Ark/Timer.html#method-c-time","()","<p>Return the time in seconds from the last call to #reset, or from the\nbeginning of program execution\n"],["to_s","Ark::TextBuilder","Ark/TextBuilder.html#method-i-to_s","()","<p>Synonym for #print\n"],["version","Ark::Git","Ark/Git.html#method-c-version","(path=nil, default: nil, markdev: true)",""],["version_line","Ark::Git","Ark/Git.html#method-c-version_line","(path=nil, project: nil, default: nil, markdev: true)",""],["wrap","Ark::Text","Ark/Text.html#method-c-wrap","(text, width: 78, indent: 0, indent_after: false)","<p>Wrap a string to a given width, with an optional indent. Indented text will\nfall within the specified …\n"],["wrap","Ark::TextBuilder","Ark/TextBuilder.html#method-i-wrap","(width: 78, indent: 0, indent_after: false, segments: false)","<p>Wrap the current line to <code>width</code>, with an optional\n<code>indent</code>. After wrapping, the current line will be the …\n"],["wrap_segments","Ark::Text","Ark/Text.html#method-c-wrap_segments","(segments, width: 78, indent: 0, indent_after: false)",""],["wrn","Ark::Log","Ark/Log.html#method-i-wrn","(str, indent=0)","<p>Write a high-verbosity warning to STDOUT\n"],["README","","README_md.html","","<p><img src=\"https://badge.fury.io/rb/ark-util.svg\">\n<p><strong>ark-util</strong> is a library of miscellaneous utilities used …\n"]]}}