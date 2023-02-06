package com.example.purple.controller;

import ac.simons.oembed.OembedResponse;
import ac.simons.oembed.OembedService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@Slf4j
@RestController("/api")
@RequiredArgsConstructor
public class OembedController {

    private final OembedService oembedService;

    @GetMapping("/oembed")
    public OembedResponse getOembedResponse(
            @RequestParam(required = true) String url,
            @RequestParam(required = false) int maxwidth,
            @RequestParam(required = false) int minwidth,
            @RequestParam(required = true) String format
    ) {

        Optional<OembedResponse> response = oembedService.getOembedResponseFor(url);

        log.info("this is oembed : {}", response);
        return response.get();
    }
}
