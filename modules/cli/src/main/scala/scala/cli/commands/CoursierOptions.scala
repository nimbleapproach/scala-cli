package scala.cli.commands

import caseapp._
import coursier.cache.FileCache
import scala.concurrent.duration.Duration
import coursier.cache.CacheLogger

// format: off
final case class CoursierOptions(
  @Group("Dependency")
  @HelpMessage("Specify a TTL for changing dependencies, such as snapshots")
  @ValueDescription("duration|Inf")
    ttl: Option[String] = None
) {
  // format: on
  def coursierCache(logger: CacheLogger) = {
    val baseCache = FileCache()
    val ttl0      = ttl.map(_.trim).filter(_.nonEmpty).map(Duration(_)).orElse(baseCache.ttl)
    baseCache
      .withTtl(ttl0)
      .withLogger(logger)
  }
}