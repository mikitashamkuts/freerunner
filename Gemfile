# Specify the source for Ruby gems
source 'https://rubygems.org'

# Specify the required Ruby version for the project.
# Using rbenv (http://rbenv.org/) or RVM (https://rvm.io/) is recommended to manage Ruby versions.
ruby ">= 2.6.10"

# Cocoapods is a dependency manager for Swift and Objective-C Cocoa projects.
# Version 1.15 introduced a bug, so the version is restricted to be less than 1.15.
# We will remove the upper bound in the template on Cocoapods with the next React Native release.
gem 'cocoapods', '>= 1.13', '< 1.15'

# Activesupport provides a collection of utility classes and standard library extensions.
# The version is restricted to be greater than or equal to 6.1.7.5 and less than 7.1.0.
gem 'activesupport', '>= 6.1.7.5', '< 7.1.0'

#   Detailed Explanation:
#  
#   - `source 'https://rubygems.org'`
#     - Specifies the source from which to fetch the Ruby gems.
#     - 'https://rubygems.org' is the default and most widely used gem repository.
#  
#   - `ruby ">= 2.6.10"`
#     - Specifies the minimum required Ruby version for the project.
#     - Ensures that the project runs on Ruby 2.6.10 or higher.
#     - Using tools like rbenv or RVM can help manage and switch between different Ruby versions easily.
#  
#   - `gem 'cocoapods', '>= 1.13', '< 1.15'`
#     - Declares a dependency on the Cocoapods gem.
#     - Specifies that the version of Cocoapods should be at least 1.13 but less than 1.15.
#     - The upper bound is set because Cocoapods 1.15 introduced a bug that breaks the build.
#     - This constraint will be lifted in the template with the next React Native release.
#  
#   - `gem 'activesupport', '>= 6.1.7.5', '< 7.1.0'`
#     - Declares a dependency on the Activesupport gem.
#     - Specifies that the version of Activesupport should be at least 6.1.7.5 but less than 7.1.0.
#     - Activesupport provides a rich set of utility classes and extensions to the Ruby standard library.
#  
#   Usage:
#   - This `Gemfile` is used to manage Ruby dependencies for the project.
#   - Run `bundle install` to install the specified gems and their dependencies.
#   - Ensure that your Ruby version matches or exceeds the specified minimum version.
#   - Use rbenv or RVM to manage Ruby versions and gemsets.
#  
#   Benefits:
#   - Ensures consistent and compatible gem versions across different development environments.
#   - Helps manage dependencies and their versions effectively.
#   - Provides a way to specify the required Ruby version for the project.