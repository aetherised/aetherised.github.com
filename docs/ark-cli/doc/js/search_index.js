var search_data = {"index":{"searchIndex":["ark","cli","argument","argumentseterror","argumentsyntaxerror","interface","interfaceerror","syntaxerror","option","report","spec","argumentsyntaxerror","nosuchoptionerror","object","arg()","args()","args()","arity()","count()","desc()","flag?()","force_option_list()","fulfilled?()","full?()","get_arg()","get_args()","get_desc()","get_name()","get_opt()","get_opts()","get_variad()","get_version()","has_args?()","has_args?()","has_default?()","has_default?()","has_options?()","header()","header()","is_glob?()","is_variadic?()","name()","new()","new()","new()","new()","new()","opt()","opt()","opts()","parse()","parse()","parse_default()","print_usage()","print_version()","push()","push()","raise_on_trailing()","rebuild()","report()","set()","strip_arg()","to_s()","toggle()","trailing()","usage()","valid_name?()","value()","value()","variadic?()","version()","readme"],"longSearchIndex":["ark","ark::cli","ark::cli::argument","ark::cli::argument::argumentseterror","ark::cli::argument::argumentsyntaxerror","ark::cli::interface","ark::cli::interface::interfaceerror","ark::cli::interface::syntaxerror","ark::cli::option","ark::cli::report","ark::cli::spec","ark::cli::spec::argumentsyntaxerror","ark::cli::spec::nosuchoptionerror","object","ark::cli::report#arg()","ark::cli::report#args()","ark::cli::spec#args()","ark::cli::option#arity()","ark::cli::report#count()","ark::cli::spec#desc()","ark::cli::option#flag?()","ark::cli::spec#force_option_list()","ark::cli::argument#fulfilled?()","ark::cli::option#full?()","ark::cli::spec#get_arg()","ark::cli::spec#get_args()","ark::cli::spec#get_desc()","ark::cli::spec#get_name()","ark::cli::spec#get_opt()","ark::cli::spec#get_opts()","ark::cli::spec#get_variad()","ark::cli::spec#get_version()","ark::cli::option#has_args?()","ark::cli::spec#has_args?()","ark::cli::argument::has_default?()","ark::cli::argument#has_default?()","ark::cli::spec#has_options?()","ark::cli::option#header()","ark::cli::spec#header()","ark::cli::argument::is_glob?()","ark::cli::spec#is_variadic?()","ark::cli::spec#name()","ark::cli::argument::new()","ark::cli::interface::new()","ark::cli::option::new()","ark::cli::report::new()","ark::cli::spec::new()","ark::cli::report#opt()","ark::cli::spec#opt()","ark::cli::report#opts()","ark::cli::argument::parse()","ark::cli::interface#parse()","ark::cli::argument::parse_default()","ark::cli::interface#print_usage()","ark::cli::interface#print_version()","ark::cli::argument#push()","ark::cli::option#push()","ark::cli::spec#raise_on_trailing()","ark::cli::interface#rebuild()","ark::cli::report()","ark::cli::argument#set()","ark::cli::argument::strip_arg()","ark::cli::option#to_s()","ark::cli::option#toggle()","ark::cli::report#trailing()","ark::cli::interface#usage()","ark::cli::argument::valid_name?()","ark::cli::argument#value()","ark::cli::option#value()","ark::cli::argument#variadic?()","ark::cli::spec#version()",""],"info":[["Ark","","Ark.html","",""],["Ark::CLI","","Ark/CLI.html","","<p>A library for handling options and arguments from the command line.\n<p>Call #report to define a new interface …\n"],["Ark::CLI::Argument","","Ark/CLI/Argument.html","","<p>Represents an argument, either to the program itself or for options which\ntake arguments.\n"],["Ark::CLI::Argument::ArgumentSetError","","Ark/CLI/Argument/ArgumentSetError.html","","<p>Raised when an argument value is set improperly\n"],["Ark::CLI::Argument::ArgumentSyntaxError","","Ark/CLI/Argument/ArgumentSyntaxError.html","","<p>Raised when invalid argument syntax is given\n"],["Ark::CLI::Interface","","Ark/CLI/Interface.html","","<p>Main class for ark-cli. Defines a <code>Spec</code>, parses the command\nline and returns <code>Report</code> objects.\n"],["Ark::CLI::Interface::InterfaceError","","Ark/CLI/Interface/InterfaceError.html","","<p>Raised when a required argument is not given\n"],["Ark::CLI::Interface::SyntaxError","","Ark/CLI/Interface/SyntaxError.html","","<p>Raised when the command line is malformed\n"],["Ark::CLI::Option","","Ark/CLI/Option.html","","<p>Represents an option and stores the option&#39;s current state, as well as\nusage information.\n"],["Ark::CLI::Report","","Ark/CLI/Report.html","","<p>Stores information parsed from the command line for later inspection\n"],["Ark::CLI::Spec","","Ark/CLI/Spec.html","","<p>The <code>Spec</code> class defines the properties of an interface, namely\nits expected arguments and option definitions, …\n"],["Ark::CLI::Spec::ArgumentSyntaxError","","Ark/CLI/Spec/ArgumentSyntaxError.html","","<p>Raised when there is a syntax error in the args declaration\n"],["Ark::CLI::Spec::NoSuchOptionError","","Ark/CLI/Spec/NoSuchOptionError.html","","<p>Raised when a nonexistent option is received\n"],["Object","","Object.html","",""],["arg","Ark::CLI::Report","Ark/CLI/Report.html#method-i-arg","(name)","<p>Get an argument by <code>name</code>\n"],["args","Ark::CLI::Report","Ark/CLI/Report.html#method-i-args","()","<p>Return an array of all args parsed\n"],["args","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-args","(*input)","<p>Define what arguments the program will accept\n"],["arity","Ark::CLI::Option","Ark/CLI/Option.html#method-i-arity","()","<p>Return the number of arguments this option expects\n"],["count","Ark::CLI::Report","Ark/CLI/Report.html#method-i-count","(name)","<p>Get the toggle count for an option by <code>name</code>\n"],["desc","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-desc","(str)","<p>Set the description of the program to <code>str</code>\n"],["flag?","Ark::CLI::Option","Ark/CLI/Option.html#method-i-flag-3F","()","<p>True if this option expects no arguments; opposite of #has_args?\n"],["force_option_list","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-force_option_list","()","<p>Force the full option list display in the usage info, no matter how many\noptions the program has\n"],["fulfilled?","Ark::CLI::Argument","Ark/CLI/Argument.html#method-i-fulfilled-3F","()","<p>Return true if this argument has been given a value, or if it has a default\nvalue. Variadic arguments …\n"],["full?","Ark::CLI::Option","Ark/CLI/Option.html#method-i-full-3F","()","<p>True if this option has received all the arguments it expects, or if this\noption expects no arguments …\n"],["get_arg","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-get_arg","(name)","<p>Get an <code>Argument</code> object for the given argument\n<code>name</code>\n"],["get_args","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-get_args","()","<p>Get an array of argument names defined for this spec\n"],["get_desc","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-get_desc","()","<p>Get the description defined for this spec\n"],["get_name","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-get_name","()","<p>Get the name defined for this spec\n"],["get_opt","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-get_opt","(name)","<p>Get an <code>Option</code> object for the given option <code>name</code>\n"],["get_opts","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-get_opts","()","<p>Get a hash of any options defined on this spec\n"],["get_variad","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-get_variad","()","<p>Return the argument name of the variadic argument\n"],["get_version","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-get_version","()","<p>Get version information defined for this spec\n"],["has_args?","Ark::CLI::Option","Ark/CLI/Option.html#method-i-has_args-3F","()","<p>True if this option expects an argument. Opposite of #flag?\n"],["has_args?","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-has_args-3F","()","<p>Return <code>true</code> if this interface has any arguments defined\n"],["has_default?","Ark::CLI::Argument","Ark/CLI/Argument.html#method-c-has_default-3F","(arg)","<p>Return <code>true</code> if the given argument has a default value, like\n+&#39;arg:defaultvalue&#39;+\n"],["has_default?","Ark::CLI::Argument","Ark/CLI/Argument.html#method-i-has_default-3F","()","<p>Return true if this argument has a default value. Variadic arguments always\nreturn true\n"],["has_options?","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-has_options-3F","()","<p>Return <code>true</code> if this interface has any options defined for it\n"],["header","Ark::CLI::Option","Ark/CLI/Option.html#method-i-header","()","<p>Return basic usage information: the option&#39;s names and arguments\n"],["header","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-header","(name: nil, desc: nil, args: [], version: nil)","<p>Specify general information about the program\n<p>name &mdash; Name of the program\n<p>desc &mdash; Short description of the program …\n"],["is_glob?","Ark::CLI::Argument","Ark/CLI/Argument.html#method-c-is_glob-3F","(arg)","<p>Return <code>true</code> if the given argument is a glob, like\n+&#39;arg…&#39;+\n"],["is_variadic?","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-is_variadic-3F","()","<p>Return <code>true</code> if this interface is variadic\n"],["name","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-name","(str)","<p>Set the name of the program to <code>str</code>\n"],["new","Ark::CLI::Argument","Ark/CLI/Argument.html#method-c-new","(name, default=nil, variad: false)","<p>Initialize a new Argument object. <code>name</code> must be alphanumeric\nand must begin with a letter. If this argument …\n"],["new","Ark::CLI::Interface","Ark/CLI/Interface.html#method-c-new","(args, &block)","<p>Initialize an Interface instance.\n<p><code>args</code> must be an array of strings, like ARGV\n"],["new","Ark::CLI::Option","Ark/CLI/Option.html#method-c-new","(long, short=nil, args=nil, desc=nil)","<p>Initialize a new Option instance\n<p>keys &mdash; A list of names this option will be identified by\n<p>args &mdash; A list of …\n"],["new","Ark::CLI::Report","Ark/CLI/Report.html#method-c-new","(args, named, trailing, options, counts)","<p>Initialize a bare <code>Report</code> object\n"],["new","Ark::CLI::Spec","Ark/CLI/Spec.html#method-c-new","()","<p>Initialize a bare interface <code>Spec</code>\n"],["opt","Ark::CLI::Report","Ark/CLI/Report.html#method-i-opt","(name)","<p>Get the value of an option by <code>name</code>\n"],["opt","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-opt","(long, short=nil, args: nil, desc: nil)","<p>Define an Option\n<p>keys &mdash; A list of names for this option\n<p>args &mdash; A list of arguments the option expects\n"],["opts","Ark::CLI::Report","Ark/CLI/Report.html#method-i-opts","()","<p>Get a hash of all options and their values\n"],["parse","Ark::CLI::Argument","Ark/CLI/Argument.html#method-c-parse","(arg)","<p>Parse an argument name and return an Argument object\n"],["parse","Ark::CLI::Interface","Ark/CLI/Interface.html#method-i-parse","()","<p>Parse the command line\n"],["parse_default","Ark::CLI::Argument","Ark/CLI/Argument.html#method-c-parse_default","(arg)","<p>Parse the default value from an arg with one\n"],["print_usage","Ark::CLI::Interface","Ark/CLI/Interface.html#method-i-print_usage","()","<p>Print usage information and exit\n"],["print_version","Ark::CLI::Interface","Ark/CLI/Interface.html#method-i-print_version","()",""],["push","Ark::CLI::Argument","Ark/CLI/Argument.html#method-i-push","(val)","<p>Push <code>val</code> onto this argument. Only valid for variadic args. For\nnormal arguments, use #set instead.\n"],["push","Ark::CLI::Option","Ark/CLI/Option.html#method-i-push","(val)","<p>Pass an argument to this option\n"],["raise_on_trailing","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-raise_on_trailing","()","<p>The parser will raise an error on finding trailing arguments (default\nbehavior is to ignore and stuff …\n"],["rebuild","Ark::CLI::Interface","Ark/CLI/Interface.html#method-i-rebuild","(input=ARGV, &block)","<p>Rebuild the interface with a new spec and args\n"],["report","Ark::CLI","Ark/CLI.html#method-c-report","(args=ARGV, &block)","<p>Convenience method for interface declarations. Yields a <code>Spec</code>\ninstance and returns a <code>Report</code> instance for …\n"],["set","Ark::CLI::Argument","Ark/CLI/Argument.html#method-i-set","(val)","<p>Set the value for this argument to <code>val</code>. Only valid for\nnon-variadic arguments. For variadic args, use …\n"],["strip_arg","Ark::CLI::Argument","Ark/CLI/Argument.html#method-c-strip_arg","(arg)","<p>Strip any special syntax from a given argument name\n"],["to_s","Ark::CLI::Option","Ark/CLI/Option.html#method-i-to_s","()","<p>Represent this option as a string\n"],["toggle","Ark::CLI::Option","Ark/CLI/Option.html#method-i-toggle","()","<p>Toggle this option to the true state and increment the toggle count. Only\nvalid for options which expect …\n"],["trailing","Ark::CLI::Report","Ark/CLI/Report.html#method-i-trailing","()","<p>Return an array of any arguments without names\n"],["usage","Ark::CLI::Interface","Ark/CLI/Interface.html#method-i-usage","()","<p>Construct usage information\n"],["valid_name?","Ark::CLI::Argument","Ark/CLI/Argument.html#method-c-valid_name-3F","(name)","<p>Validate an option name. Names must be alphanumeric, and must begin with a\nletter.\n"],["value","Ark::CLI::Argument","Ark/CLI/Argument.html#method-i-value","()","<p>Return the value for this argument. The default value will be returned if\nthe argument is unset and the …\n"],["value","Ark::CLI::Option","Ark/CLI/Option.html#method-i-value","()","<p>Return the current value of this option\n"],["variadic?","Ark::CLI::Argument","Ark/CLI/Argument.html#method-i-variadic-3F","()","<p>Return true if this argument is a glob\n"],["version","Ark::CLI::Spec","Ark/CLI/Spec.html#method-i-version","(str)","<p>Set the version information for the program to <code>str</code>\n"],["README","","README_md.html","","<p>ark-cli\n<p><img src=\"https://badge.fury.io/rb/ark-cli.svg\">\n<p><strong>ark-cli</strong> is a Ruby library for handling command …\n"]]}}